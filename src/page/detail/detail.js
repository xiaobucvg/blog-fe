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

$(function () {
    sessionStorage.setItem('nth-nav', -1);
    banner('标题', '发布时间');

    let code = `#include "flutter/fml/trace_event.h"
#define TRACE_EVENT0(category_group, name)
#define TRACE_EVENT1(category_group, name, arg1_name, arg1_val)
#define TRACE_EVENT2(category_group, name, arg1_name, arg1_val, arg2_name, arg2_val)
#define FML_TRACE_EVENT(category_group, name, ...)
fml:: tracing:: TraceEvent0(category_group, name);
fml:: tracing:: TraceEventEnd(name);
    //示例：
TRACE_EVENT0("flutter", "PipelineConsume");
TRACE_EVENT2("flutter", "Framework Workload",
    "mode", "basic", "frame", FrameParity());
`

    let html = Prism.highlight(code, Prism.languages.javascript, 'c');

    $('.language-c').html(html);


    $('#auto_menu').autoMenu({
        levelOne: 'h2', //一级标题
        levelTwo: 'h3', //二级标题（暂不支持更多级）
    });
})
