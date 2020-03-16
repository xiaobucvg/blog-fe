import './edit.css'
// 编辑器
import 'tui-editor/dist/tui-editor.min.css'; // editor's ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor's content
import 'codemirror/lib/codemirror.css'; // codemirror
import 'highlight.js/styles/github.css'; // code block highlight
import Editor from 'tui-editor'
// 多选框
import 'bootstrap4-tagsinput/tagsinput.css'
import 'bootstrap4-tagsinput/tagsinput'

$(function () {
    // 初始化编辑器
    var editor = new Editor({
        el: document.querySelector('#editor'),
        initialEditType: 'markdown',
        language: 'zh_CN',
        hideModeSwitch: true,
        height: 600,
    });
    // ..
    $('#tags').tagsinput();
});