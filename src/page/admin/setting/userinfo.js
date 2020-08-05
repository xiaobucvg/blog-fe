// 用户信息 userinfo

import userService from '@/service/admin-user-service'
import util from '@/util/util'

export default {


    init() {
        this.showUserInfo();

        this.bindEvent();
    },


    bindEvent() {
        // 头像域发生变化
        $('#avatar_input').change(function () {
            let reader = new FileReader();
            let avatar = $(this)[0].files[0];
            reader.readAsDataURL(avatar);
            reader.onload = (data) => {
                $('#user_info_avatar_src').attr('src', data.target.result);
            };
        });
        // 点击头像
        $('#user_info_avatar_src').click(() => {
            $('#avatar_input').click()
        });
        // 确认修改
        $('#change_info_btn').click(() => {
            let userInfo = {};
            userInfo.nickname = $('#nickname_input').val();
            userInfo.username = $('#username_input').val();
            userInfo.avatar = $('#avatar_input')[0].files[0];

            if (userInfo.nickname == null || userInfo.nickname == undefined || $.trim(userInfo.nickname).length == 0) {
                util.errorTip('昵称不能为空');
                return;
            }
            if (userInfo.username == null || userInfo.username == undefined || $.trim(userInfo.username).length == 0) {
                util.errorTip('用户名不能为空');
                return;
            }
            if (!userInfo.avatar) {
                delete userInfo.avatar;
            }

            userService.changeInfo(userInfo).then(() => {
                util.simpleTip('更改信息成功');
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            });
        })
    },

    // 展示用户信息
    showUserInfo() {
        userService.getInfo().then(data => {
            $('#username_input').val(data.username);
            $('#user_info_avatar_src').attr('src', data.avatar);
            $('#nickname_input').val(data.nickname);
        })
    },
}