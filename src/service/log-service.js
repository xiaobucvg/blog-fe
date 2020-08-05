// 日志服务

import util from '@/util/util'


export default {

    // 获取日志
    getLogs(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "create_time", rule: "desc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/logs',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            }))
        });
    },

}