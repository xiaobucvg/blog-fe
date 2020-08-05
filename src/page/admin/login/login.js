import './login.css'

import util from '@/util/util'

import adminService from '@/service/admin-user-service'


const login = {
    requestInfo: {},

    init() {
        this.bindEvent();
    },

    bindEvent() {
        let that = this;
        $('#login_btn').click(function () {
            that.createRequestInfo();
            if (that.validateData()) {
                adminService.getToken(that.requestInfo.username, that.requestInfo.password).then((data) => {
                    window.localStorage.setItem('token', data.token);
                    window.location.href = '/admin/index.html'
                }).catch((data) => {
                    util.errTip(data.msg);
                })
            }
        });
    },

    // 创建用户请求信息
    createRequestInfo() {
        this.requestInfo.username = $('#username_input').val().trim();
        this.requestInfo.password = $('#password_input').val().trim();
    },

    // 验证数据
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

    let a = require('../../../asserts/imgs/index-bg.png');
    console.log(a);

})