// 更改密码 password
import util from '@/util/util'
import userService from '@/service/admin-user-service'

export default {
    init() {
        this.bindEvent();
    },

    clearInput() {
        $('#old_password_input').val('');
        $('#new_password_input').val('');
        $('#repeat_password_input').val('');
    },

    bindEvent() {
        $('#change_password_btn').click(() => {

            let passwordInfo = {};

            passwordInfo.oldpassword = $('#old_password_input').val().trim();
            passwordInfo.newpassword = $('#new_password_input').val().trim();
            passwordInfo.repeatpassword = $('#repeat_password_input').val().trim();

            if (!passwordInfo.oldpassword || !passwordInfo.newpassword) {
                util.errTip('密码输入不能为空');
                return;
            }
            if (passwordInfo.newpassword != passwordInfo.repeatpassword) {
                util.errTip('两次密码输入不一致');
                return;
            }

            userService.changePassword(passwordInfo).then(() => {
                util.simpleTip('密码修改成功');
                this.clearInput();
            }).catch((data) => {
                util.simpleTip(data.msg);
                this.clearInput();
            });
        })
    },


}