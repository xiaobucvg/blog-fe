// 标签服务

import util from '@/util/util'


export default {

    // 获取标签
    getTags(obj) {
        let defaultObj = { startPage: 1, count: 50, sorts: [{ name: "name", rule: "asc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.host + '/tags',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            }))
        });
    }


}

