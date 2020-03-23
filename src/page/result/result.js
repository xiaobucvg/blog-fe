import './result.css'
import banner from '../../layout/common/banner/banner'
import Pagaination from '@/util/pagination/pagaination'

import util from '@/util/util'

import articleService from '@/service/article-service'

import resultTmpl from './result.tmpl'

const result = {

    requestInfo: {},

    keywords: null,

    tag: null,

    init() {

        this.keywords = util.getUrlParamter('keywords');
        this.tag = util.getUrlParamter('tag');

        // 如果关键字和标签同时存在，那么只有关键字有用


        if (this.keywords == null || this.keywords.length == 0) {
            if (this.tag < 1) {
                window.location.href = "/index.html";
            }
            else {
                this.processTag();
            }
        }
        else {
            this.processKeywords();
        }

    },


    processKeywords() {
        banner('Result', '包含 ‘' + decodeURI(this.keywords) + '’ 的搜索结果');

        $("#keywords_input").val(decodeURI(this.keywords));

        this.requestInfo.keywords = this.keywords;
        this.getDataAndPage();
    },

    processTag() {

        banner('Result', '标签下的内容');

        this.requestInfo.tagid = this.tag;
        this.getDataAndPageByTag()
    },

    // 获取数据并生成分页
    getDataAndPage() {
        let that = this;
        // 1. 获取默认数据,渲染
        // 2. 创建默认数据的分页
        articleService.getPublishedArticles(that.requestInfo).then(data => {
            this.createHtml(data);
            this.pageInfo = this.getPageInfo(data);
            // 点击页码之后的回调
            this.pageInfo.callBack = (pageData) => {
                that.requestInfo.startPage = pageData.currentPage;
                articleService.getPublishedArticles(that.requestInfo).then((data) => {
                    this.createHtml(data);
                });
            }
            new Pagaination(this.pageInfo);
        });
    },

    getDataAndPageByTag() {
        let that = this;
        articleService.getTagArticles(that.requestInfo).then(data => {
            this.createHtml(data);
            this.pageInfo = this.getPageInfo(data);
            // 点击页码之后的回调
            this.pageInfo.callBack = (pageData) => {
                that.requestInfo.startPage = pageData.currentPage;
                articleService.getPublishedArticles(that.requestInfo).then((data) => {
                    this.createHtml(data);
                });
            }
            new Pagaination(this.pageInfo);
        });
    },


    // 渲染结果
    createHtml(data) {
        let html = util.renderHtml(resultTmpl, data)
        $("#items_content").html(html);
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
    sessionStorage.setItem('nth-nav', -1);

    result.init();
})