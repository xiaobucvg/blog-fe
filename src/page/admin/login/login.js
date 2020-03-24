import './login.css'

import util from '@/util/util'

import adminService from '@/service/admin-user-service'


const login = {
    requestInfo: {},

    init() {

        // 如果打开登录页面能够查到个人信息,说明已经登录了,跳到管理页面
        adminService.getInfo().then(() => {
            window.location.href = "/admin/index.html";
        });

        this.bindEvent();
    },

    bindEvent() {
        let that = this;
        $('#login_btn').click(function () {
            that.createRequestInfo();
            if (that.validateData()) {
                adminService.login(that.requestInfo).then(() => {
                    window.location.href = '/admin/index.html'
                }).catch((data) => {
                    util.errTip(data.msg);
                })
            }
        });
    },

    createRequestInfo() {
        this.requestInfo.username = $('#username_input').val().trim();
        this.requestInfo.password = $('#password_input').val().trim();
    },

    validateData() {
        if (this.requestInfo.username == null || this.requestInfo.username.length < 1) {
            util.errorTip('用户名不能为空');
            return false;
        }
        if (this.requestInfo.password == null || this.requestInfo.password.length < 1) {
            util.errorTip('密码不能为空');
            return false;
        }
        return true;
    }
}

$(function () {
    login.init();
})