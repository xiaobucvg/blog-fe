import './manage.css'
import Pagaination from '@/util/pagination/pagaination'
import articleService from '@/service/article-service'
import util from '@/util/util'

import articleTableTmpl from './article-table.tmpl'

const manage = {
    pageInfo: {},

    // 分页对象
    pagaination: {},

    // 全局请求信息
    requestInfo: {},

    init() {

        this.getDataAndPage({});

        this.bindEvent();
    },

    // 绑定事件
    bindEvent() {
        let that = this;
        // 所有文章
        $('#all_article_btn').click(function () {
            $('.table-link').removeClass('active');
            that.requestInfo = {};
            that.getDataAndPage();
            $('#keywords_input').val('');
        });
        // 搜索
        $('#search_btn').click(function () {
            let keywords = $('#keywords_input').val().trim();
            if (keywords != '') {
                that.requestInfo = {
                    keywords: keywords,
                };
                that.getDataAndPage();
            }
        });
        // ID
        $('#id_btn').click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'id',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });
        // 标题
        $('#title_btn').click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'title',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });
        // 状态
        $('#status_btn').click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'status',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });
        // 发布时间
        $('#create_time_btn').click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'create_time',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });
        // 更新时间
        $('#update_time_btn').click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'update_time',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });
        // 阅读数
        $("#reading_btn").click(function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'reading',
                    rule: 'asc'
                }
            ]
            that.getDataAndPage();
        });

        // 删除
        $(document).on('click', '#delete_btn', function () {
            let id = $(this).parent().data('id');
            if (confirm('确定要删除吗？删除后可以从回收站找回.')) {
                articleService.deleteArticle(id).then(() => {
                    that.getDataAndPage();
                });
            }
        });
        // 操作 - 按照状态排序
        $(document).on('click', '#status_btn', function () {
            $('.table-link').removeClass('active');
            $(this).addClass('active')
            that.requestInfo.startPage = 1;
            that.requestInfo.sorts = [
                {
                    name: 'status',
                    rule: 'desc'
                }
            ]
            that.getDataAndPage();
        });

        // 置顶/取消置顶
        $(document).on('click', '#top_btn', function () {
            let id = $(this).parent().data('id');
            let statusCode = $(this).parent().data('status');
            articleService.topArticle(id, statusCode == articleService.articleStatus.TOP).then(() => {
                that.getDataAndPage();
            });
        });

        // 发布/停止发布
        $(document).on('click', '#publish_btn', function () {
            let id = $(this).parent().data('id');
            let statusCode = $(this).parent().data('status');
            articleService.publishArticle(id, statusCode == articleService.articleStatus.NOT_PUBLISHED).then(() => {
                that.getDataAndPage();
            });
        });

    },

    // 获取数据并生成分页
    getDataAndPage() {
        let that = this;
        // 1. 获取默认数据,渲染
        // 2. 创建默认数据的分页
        articleService.getArticles(that.requestInfo).then(data => {
            this.createHtml(data);
            this.pageInfo = this.getPageInfo(data);
            // 点击页码之后的回调
            this.pageInfo.callBack = (pageData) => {
                that.requestInfo.startPage = pageData.currentPage;
                articleService.getArticles(that.requestInfo).then((data) => {
                    this.createHtml(data);
                });
            }
            this.pagaination = new Pagaination(this.pageInfo);
        });
    },

    // 渲染模板
    createHtml(data) {
        let articleTable = util.renderHtml(articleTableTmpl, data);
        $('#table_wrapper').html(articleTable);
    },

    // 获取分页信息
    getPageInfo(data) {
        let pageInfo = {};
        pageInfo = Object.assign(pageInfo, data);
        delete pageInfo.list;
        return pageInfo;
    }
}

$(function () {

    manage.init();

})
