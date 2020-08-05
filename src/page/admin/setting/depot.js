// 回收站 depot
import articleService from '@/service/article-service'
import util from '@/util/util'
import Pagaination from '@/util/pagination/pagaination'
import depotTmpl from './depot.tmpl'

export default {
    pagaination: null,
    pageInfo: null,
    requestInfo: {},

    init() {
        this.bindEvent();
        this.getDataAndPage();
    },
    bindEvent() {
        let that = this;
        // 永久删除
        $(document).on('click', '#delete_btn', function () {
            if (confirm('确定要永久删除吗？该操作不可逆')) {
                let id = $(this).parent().data('id');
                articleService.deleteArticle(id).then(data => {
                    that.getDataAndPage();
                    util.simpleTip('成功删除');
                })
            }
        });

        // 恢复
        $(document).on('click', '#resume_btn', function () {
            let id = $(this).parent().data('id');
            articleService.setNotPublished(id).then(data => {
                util.simpleTip('恢复成功');
                that.getDataAndPage();
            })
        })

        // 清空回收站
        $('#clean_dpot').click(function () {
            if (confirm('这里面的文章都会被删除，而且无法找回，请确保您真的知晓此功能的意义')) {
                articleService.deleteArticle().then(data => {
                    that.getDataAndPage();
                    util.simpleTip('回收站已清空');
                })
            }
        })
    },

    // 渲染已删除文章
    getDataAndPage() {
        let that = this;

        articleService.getDeletedArticles(that.requestInfo).then(data => {
            this.createHtml(data);
            this.pageInfo = this.getPageInfo(data);
            // 点击页码之后的回调
            this.pageInfo.callBack = (pageData) => {
                that.requestInfo.startPage = pageData.currentPage;
                articleService.getDeletedArticles(that.requestInfo).then((data) => {
                    this.createHtml(data);
                });
            }
            this.pagaination = new Pagaination(this.pageInfo);
        })
    },

    // 渲染模板
    createHtml(data) {
        let html = util.renderHtml(depotTmpl, data);
        $('#table_wrapper').html(html);
    },
    // 获取分页信息
    getPageInfo(data) {
        let pageInfo = {};
        pageInfo = Object.assign(pageInfo, data);
        delete pageInfo.list;
        return pageInfo;
    }
}