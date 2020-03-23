import './index.css'
import banner from '../../layout/common/banner/banner'

import Pagaination from '@/util/pagination/pagaination'

import articleService from '@/service/article-service'

import util from '@/util/util'
import indexTmpl from './index.tmpl'


const index = {

    requestInfo: {},

    init() {
        this.getDataAndPage();
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

    // 渲染数据
    createHtml(data) {
        let html = util.renderHtml(indexTmpl, data);
        $('#items_content').html(html);
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
    sessionStorage.setItem('nth-nav', 0);
    banner('Xiaobu', 'Keep Going');

    index.init();
})
