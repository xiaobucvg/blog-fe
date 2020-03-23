import tagService from '@/service/tag-service'
import articleService from '@/service/article-service'

import util from '@/util/util'

import tagsTmpl from './tags.tmpl'
import hotTmpl from './hot.tmpl'

const sidebar = {

    init() {
        tagService.getTags().then(data => {
            this.createHtml(data);
        })

        articleService.getHotArticles().then(data => {
            this.createHotArticleHtml({
                list: data
            });
        })
    },

    // 渲染标签
    createHtml(data) {
        let html = util.renderHtml(tagsTmpl, data);
        $('#tags_content').html(html);
    },

    // 渲染热门文章
    createHotArticleHtml(data) {
        let html = util.renderHtml(hotTmpl, data)
        $('#hot_content').html(html);
    }
}

$(function () {
    sidebar.init();
})