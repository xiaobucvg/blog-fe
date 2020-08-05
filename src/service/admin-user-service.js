// 管理员服务

import util from '@/util/util'


export default {
    // 获取 token
    getToken(username, password) {
        return util.request({
            url: util.host + '/admin/token',
            type: 'GET',
            contentType: 'application/json',
            data: {
                username,
                password,
            }
        })
    },

    // 查看自己的信息
    getInfo() {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/user',
            type: 'GET',
            contentType: 'application/json',
        })
    },

    // 修改信息
    changeInfo(userInfo) {
        let data = new FormData();
        data.append('username', userInfo.username);
        data.append('nickname', userInfo.nickname);
        if (userInfo.avatar) {
            data.append('avatarFile', userInfo.avatar);
        }
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/user',
            type: 'POST',
            processData: false,
            data: data,
            contentType: false,
        })
    },

    // 修改密码
    changePassword(passwordInfo) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/user/password',
            type: 'PUT',
            data: {
                oldPassword: passwordInfo.oldpassword,
                newPassword: passwordInfo.newpassword
            },
        })
    },

    // 退出登录
    logout() {
        window.localStorage.removeItem('token');
        window.location.href = '/admin/login.html'
    }
}