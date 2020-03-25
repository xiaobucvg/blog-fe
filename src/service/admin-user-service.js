// 管理员服务

import util from '@/util/util'


export default {
    // 获取 token
    getToken(username, password) {
        return util.request({
            url: util.devHost + '/admin/token',
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
            url: util.devHost + '/admin/user',
            type: 'GET',
            contentType: 'application/json',
        })
    },

    // 退出登录
    logout() {
        window.localStorage.removeItem('token');
        window.location.href = '/admin/login.html'
    }
}