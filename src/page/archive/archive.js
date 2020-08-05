import './archive.css'
import banner from '@/layout/common/banner/banner'
import '@/layout/common/sidebar/sidebar'
import articleService from '@/service/article-service'

import archiveTmpl from './archive.tmpl'
import util from '@/util/util'

const archive = {

    requestInfo: {},

    init() {
        banner('Archieve', '');

        this.getDataAndPage();
    },

    // 获取数据并生成分页
    getDataAndPage() {
        let that = this;
        // 1. 获取默认数据,渲染
        // 2. 创建默认数据的分页
        articleService.getArchive(that.requestInfo).then(data => {
            this.createHtml(data);
        });
    },

    // 渲染数据
    createHtml(data) {
        let html = util.renderHtml(archiveTmpl, data);
        $('#archive_content').html(html);
    },

}

$(function () {
    sessionStorage.setItem('nth-nav', 1);

    archive.init();
})