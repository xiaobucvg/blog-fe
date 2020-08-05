import './detail.css'
import banner from '../../layout/common/banner/banner'
// 代码高亮
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
// 排版
import 'typocss/typo.css'
// 自动目录生成
import '@/util/blog-menu/js/jquery.autoMenu.js'
import '@/util/blog-menu/css/jquery.autoMenu.css'

import articleService from '@/service/article-service'
import tagService from '@/service/tag-service'


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

        this.showArticle();
        this.showTags();
    },

    // 展示文章
    showArticle() {
        articleService.getPublishedDetailArticle(this.articleId).then(data => {
            banner(data.title, '发布于 ' + data.createTime);

            $('#article').html(data.content);

            this.createCatalog();

            this.codeHeighlight();

            this.showCurrentTags(data.tags);

            this.responsiveTable();
        }).catch(() => {
            window.location.href = '/index.html'
        });
    },

    // 头部展示本文标签
    showCurrentTags(tags) {
        let html = util.renderHtml(tagsTmpl, { list: tags });
        $('#banner_tags').html(html);
    },

    // 底部展示全部标签
    showTags() {
        tagService.getTags().then((data) => {
            let html = util.renderHtml(tagsTmpl, data);
            $('#tags_content').html(html);
        });
    },

    // 生成目录
    createCatalog() {
        $('#auto_menu').autoMenu({
            height: 'auto',
            levelOne: 'h2', //一级标题
            levelTwo: 'h4', //二级标题（暂不支持更多级）
        });
    },

    // 代码高亮
    codeHeighlight() {

        import('prismjs');
        $('code').each(function () {
            let lang = $(this).data('language')
            if (lang) {
                console.log(lang);
                try {
                    import('prismjs/components/prism-' + lang).catch(() => { });
                } catch (error) {

                }
            }
        })
    },

    // 表格修改为响应式
    responsiveTable() {
        $('#article table').addClass('table-responsive');
    }
}


$(function () {

    detail.init();

})
