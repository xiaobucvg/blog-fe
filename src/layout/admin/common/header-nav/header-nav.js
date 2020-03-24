import util from '@/util/util'

import adminService from '@/service/admin-user-service'

const nav = {
    userInfo: {},

    init() {
        adminService.getInfo().then((data) => {
            this.userInfo = data;
            this.showInfo();
        }).catch(() => {
            window.location.href = '/admin/login.html';
        });

        this.bindEvent();
    },

    bindEvent() {
        $("#logout_btn").click(function () {
            adminService.logout().then(() => {
                window.location.href = '/admin/login.html';
            })
        })
    },

    // 导航栏展示用户信息

    showInfo() {
        $('#name_area').text(this.userInfo.nickname);
        $('#avatar_area').attr('src', this.userInfo.avatar);
    }
}

$(function () {

    nav.init();

})