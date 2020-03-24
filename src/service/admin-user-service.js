// 管理员服务

import util from '@/util/util'


export default {
    // 登录
    login(obj) {
        return util.request({
            url: util.devHost + '/admin/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: obj.username,
                password: obj.password
            })
        })
    },

    // 查看自己的信息
    getInfo() {
        return util.request({
            url: util.devHost + '/admin/user',
            type: 'GET',
            contentType: 'application/json',
        })
    },

    // 退出登录
    logout() {
        return util.request({
            url: util.devHost + '/admin/logout',
            type: 'GET',
            contentType: 'application/json',
        })
    }
}