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

    editor: {},
    articleId: -1,
    articleInfo: {},

    init() {
        this.initEditor(); // 编辑器
        $('#tags').tagsinput(); // 多选框
        this.articleId = util.getUrlParamter('id'); // 获取 ID
        if (!isNaN(this.articleId) && this.articleId > 0) {
            articleService.getDetailArticle(this.articleId).then((data) => {
                this.articleInfo = data;
                this.showArticleInfo();
            })
        }

        this.bindEvent();
    },


    // 显示文章信息
    showArticleInfo() {
        // 标题
        $('#title_input').val(this.articleInfo.title);
        // 内容
        this.editor.setHtml(this.articleInfo.content);
        // 标签
        $('#tags').tagsinput('removeAll')
        this.articleInfo.tags.forEach(el => {
            $('#tags').tagsinput('add', el.name)
        });
        // 发布按钮
        $('#publish_btn').val('更新');
    },


    // 初始化编辑器
    initEditor() {
        this.editor = new Editor({
            el: document.querySelector('#editor'),
            initialEditType: 'markdown',
            language: 'zh_CN',
            hideModeSwitch: true,
            height: 600,
        });

    },

    // 绑定事件
    bindEvent() {
        let that = this;

        // 发布
        $(document).on('click', '#publish_btn', function () {
            that.createArticleInfo();
            if (!that.validateData()) {
                return;
            }
            articleService.saveArticle(that.articleInfo).then(() => {
                if (!isNaN(that.articleId) && that.articleId > 0) {
                    util.successTip('更新文章成功');
                }
                else {
                    util.successTip('创建文章成功');
                }
            });
        });

    },

    // 创建文章数据
    createArticleInfo() {
        this.articleInfo = {};
        this.articleInfo.id = this.articleId;
        this.articleInfo.title = $('#title_input').val();
        this.articleInfo.content = this.editor.getHtml();
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