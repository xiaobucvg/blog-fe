
import adminService from '@/service/admin-user-service'
import util from '@/util/util'

const nav = {
    userInfo: {},

    init() {
        adminService.getInfo().then((data) => {
            this.userInfo = data;
            this.showInfo();
        }).catch(() => {
            util.goLoginPage();
        });
        this.bindEvent();
    },

    bindEvent() {
        $("#logout_btn").click(function () {
            adminService.logout();
        })
    },

    // 导航栏展示用户信息
    showInfo() {
        $('#name_area').text(this.userInfo.nickname);
        $('#avatar_src').attr('src', this.userInfo.avatar);
    }
}

$(function () {

    nav.init();

})