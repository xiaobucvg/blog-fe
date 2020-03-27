import './detail.css'
import banner from '../../layout/common/banner/banner'
// 代码高亮
import '@3/prismjs/themes/prism.css'
import '@3/prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs';
// 排版
import '@3/typocss/typo.css'
// 自动目录生成
import '@/util/blog-menu/js/jquery.autoMenu.js'
import '@/util/blog-menu/css/jquery.autoMenu.css'

import articleService from '@/service/article-service'

import util from '@/util/util'

import tagsTmpl from './tags.tmpl'

const detail = {

    article: -1,

    init() {
        sessionStorage.setItem('nth-nav', -1);

        this.articleId = util.getUrlParamter('id');

        if (this.articleId < 1) {
            window.location.href = '/index.html';
        }

        articleService.getPublishedDetailArticle(this.articleId).then(data => {
            banner(data.title, '发布于 ' + data.createTime);

            $('#article').html(data.content);

            let tagsHtml = util.renderHtml(tagsTmpl, data);
            $('#tags_content').html(tagsHtml);

            this.createCatalog();
        }).catch(() => {
            window.location.href = '/index.html'
        });
    },

    // 生成目录
    createCatalog() {
        $('#auto_menu').autoMenu({
            levelOne: 'h2', //一级标题
            levelTwo: 'h4', //二级标题（暂不支持更多级）
        });
    }
}

$(function () {

    detail.init();

})
