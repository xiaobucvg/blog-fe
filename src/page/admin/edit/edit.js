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

import util from '@/util/util'
import articleService from '@/service/article-service'

const edit = {

    articleId: null,

    articleInfo: {},

    init() {

        // 获取文章 ID，如果有的话
        this.articleId = util.getUrlParamter('id') || null;

        // 初始化编辑器
        this.initEditor();

        // 初始化多选框
        $('#tags').tagsinput();

        // 将文章信息显示
        if (this.articleId != null) {
            this.showArticleInfo();
        }

        // 绑定事件
        this.bindEvent();
    },

    // 初始化编辑器
    initEditor() {
        this.editor = new Editor({
            el: document.querySelector('#editor'),
            initialEditType: 'markdown',
            language: 'zh_CN',
            hideModeSwitch: true,
            height: 600,
            useCommandShortcut: true,
            useDefaultHTMLSanitizer: true,
            usageStatistics: false,
        })
        this.editor.addHook('addImageBlobHook', () => {
            let imgFile = $('.te-image-file-input').get(0).files[0];
            let info = $('.te-alt-text-input').val().trim();
            articleService.postImg(imgFile).then((data) => {
                this.editor.insertText('![' + info + ']' + '(' + data.url + ')');
            });
        })
    },

    // 显示文章信息
    showArticleInfo() {
        articleService.getDetailArticle(this.articleId).then((data) => {
            this.articleInfo = data;
            // 标题
            $('#title_input').val(this.articleInfo.title);
            // 内容
            this.editor.setHtml(this.articleInfo.content);
            // 标签
            $('#tags').tagsinput('removeAll')
            this.articleInfo.tags.forEach(el => {
                $('#tags').tagsinput('add', el.name)
            });
            // 按钮
            $('#publish_btn').val('更新');
        })

    },


    // 绑定事件
    bindEvent() {
        // 发布按钮
        $('#publish_btn').click(() => {
            this.changeArticleInfo();
            if (!this.validateData()) {
                return;
            }
            articleService.saveArticle(this.articleInfo).then((data, msg) => {
                util.successTip(msg);
            });
        });
    },


    // 修改文章信息
    changeArticleInfo() {
        // 标题
        this.articleInfo.title = $('#title_input').val();
        // 内容
        this.articleInfo.content = this.editor.getHtml();
        // 标签
        this.articleInfo.tags = this.getAllTags();
    },

    // 获取所有标签
    getAllTags() {
        let tags = [];
        $('.badge.badge.badge-info').each(function () {
            tags.push($(this).text())
        })
        return tags;
    },

    // 验证数据
    validateData() {
        if (!this.articleInfo.title || this.articleInfo.title.length > 50) {
            util.errTip('文章标题不能为空，最多 50 个字');
            return false;
        }
        if (!this.articleInfo.content) {
            util.errTip('文章内容不能为空');
            return false;
        }
        if (this.articleInfo.tags.length < 1) {
            util.errTip('文章标签至少需要一个');
            return false;
        }
        return true;
    }
}


$(function () {
    edit.init();
});