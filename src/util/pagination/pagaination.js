import util from '@/util/util'
import pageTmpl from './pagination.tmpl'

// 分页

// 1. 接收参数 { 展示区域##page 全部页数#0 当前页码#0 页码显示数量#0 }

export default class Pagaination {
    constructor(props) {

        this.props = {
            dom: $("#page"), pageCount: 0, currentPage: 0, pageShowCount: 5, callBack: function () {
                console.log('默认回调被触发了~');
            }
        };

        this.props = Object.assign(this.props, props);
        this.init();
    }

    // 初始化
    init() {
        // 总页数为 1 页,隐藏分页
        if (this.props.pageCount <= 1) {
            this.props.dom.html("");
        }
        // 构造分页 DOM
        else {
            this.createPage();
        }
    }

    createPage() {
        // 1. 计算要展示的页码起始和结束位置的页码值
        let start = -1;
        let end = -1;

        let offset = 2;
        // 如果当前页码小于 <= offset  , offset - curr + 1 = ?
        let addtionOffset = 0;
        if (this.props.currentPage <= offset) {
            addtionOffset = offset - this.props.currentPage + 1;

            start = this.props.currentPage - offset + addtionOffset;
            end = this.props.currentPage + offset + addtionOffset;
            end = end > this.props.pageCount ? this.props.pageCount : end;

        }
        // 如果当前页码大于 总页数 - offset , offset - curr + 1 
        else if (this.props.currentPage > this.props.pageCount - offset) {
            addtionOffset = offset - (this.props.pageCount - this.props.currentPage);

            start = this.props.currentPage - offset - addtionOffset;
            start = start > 1 ? start : 1;
            end = this.props.currentPage + offset - addtionOffset;
        }
        // 普通情况
        else {
            start = this.props.currentPage - offset;
            start = start > 0 ? start : 1;
            end = this.props.currentPage + offset;
            end = end > this.props.pageCount ? this.props.pageCount : end;
        }


        // 2. 构造渲染数据
        let data = {
            hasPrePage: this.props.currentPage > 1,
            hasNextPage: this.props.currentPage < end,
            currentPage: this.props.currentPage,
            start,
            end,
        }

        // 3. 渲染模板并展示
        let pageHtml = util.renderHtml(pageTmpl, data);
        this.props.dom.html(pageHtml);
        // 4. 重新绑定事件
        this.bindEvent();
    }

    // 绑定事件
    bindEvent() {
        let that = this;
        // 页码绑定
        this.props.dom.find('.page-number').click(function () {
            let clickPage = $(this).data('page');
            that.props.currentPage = clickPage;
            that.props.callBack(that.props);
            that.createPage();
        });
        // 前一页绑定
        this.props.dom.find('.page-pre').click(function () {
            that.props.currentPage--;
            that.createPage();
            that.props.callBack(that.props);
        });
        // 后一页绑定
        this.props.dom.find('.page-next').click(function () {
            that.props.currentPage++;
            that.createPage();
            that.props.callBack(that.props);
        });
    }




}