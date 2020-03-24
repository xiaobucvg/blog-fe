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

const detail = {

    article: -1,

    init() {
        sessionStorage.setItem('nth-nav', -1);
        banner('标题', '发布时间');

        this.articleId = util.getUrlParamter('id');

        if (this.articleId < 1) {
            window.location.href = '/index.html';
        }

        articleService.getPublishedDetailArticle(this.articleId).then(data => {
            console.log(data);
            banner(data.title, '发布于 ' + data.createTime);
            $('#article').html(data.content);
            this.createCatalog();
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


    //     let code = `#include "flutter/fml/trace_event.h"
    // #define TRACE_EVENT0(category_group, name)
    // #define TRACE_EVENT1(category_group, name, arg1_name, arg1_val)
    // #define TRACE_EVENT2(category_group, name, arg1_name, arg1_val, arg2_name, arg2_val)
    // #define FML_TRACE_EVENT(category_group, name, ...)
    // fml:: tracing:: TraceEvent0(category_group, name);
    // fml:: tracing:: TraceEventEnd(name);
    //     //示例：
    // TRACE_EVENT0("flutter", "PipelineConsume");
    // TRACE_EVENT2("flutter", "Framework Workload",
    //     "mode", "basic", "frame", FrameParity());
    // `

    //     let html = Prism.highlight(code, Prism.languages.javascript, 'c');

    //     $('.language-c').html(html);



})
