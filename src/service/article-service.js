// 文章服务

import util from '@/util/util'


export default {

    articleStatus: {
        PUBLISHED: 1001,
        NOT_PUBLISHED: 1002,
        DELETED: 1003,
        TOP: 1004,
        DRAFT: 1005
    },


    // 后台



    // 分页获取全部文章
    // 默认获取第 1 页，10 条数据，按照文章 ID S->L 排序
    getArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "id", rule: "desc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.devHost + '/admin/articles',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            })) + '&keywords=' + obj.keywords
        });
    },

    // 删除文章
    deleteArticle(id) {
        return util.request({
            url: util.devHost + '/admin/articles/' + id,
            type: 'DELETE',
            contentType: 'application/json',
        });
    },
    // 置顶/取消置顶文章
    // action true 置顶   false 取消置顶
    topArticle(id, action) {
        let statusCode = action ? this.articleStatus.PUBLISHED : this.articleStatus.TOP;
        return util.request({
            url: util.devHost + '/admin/articles/' + id + '?statusCode=' + statusCode,
            type: 'PUT',
            contentType: 'application/json',
        })
    },
    // 停止/发布
    publishArticle(id, action) {
        let statusCode = action ? this.articleStatus.PUBLISHED : this.articleStatus.NOT_PUBLISHED;
        return util.request({
            url: util.devHost + '/admin/articles/' + id + '?statusCode=' + statusCode,
            type: 'PUT',
            contentType: 'application/json',
        })
    },
    // 获取文章详细数据
    getDetailArticle(id) {
        return util.request({
            url: util.devHost + '/admin/articles/' + id,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    // 更新/保存文章
    saveArticle(data) {

        return util.request({
            url: util.devHost + '/admin/articles',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
    },

    // 前台

    getPublishedArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "id", rule: "desc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.devHost + '/articles',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            })) + '&keywords=' + obj.keywords
        });
    },

    // 获取文章详细数据
    getPublishedDetailArticle(id) {
        return util.request({
            url: util.devHost + '/articles/' + id,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    // 查询归档
    getArchive(obj) {
        let defaultObj = { startPage: 1, count: 2, sorts: [], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.devHost + '/articles/archives',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            }))
        });
    },

    // 获取标签下的文章
    getTagArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "id", rule: "desc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.devHost + '/articles/tag/' + obj.tagid,
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            }))
        });
    },

    // 获取 10 篇热门文章
    getHotArticles() {
        return util.request({
            url: util.devHost + '/articles/hot-articles',
            type: 'GET',
            data: {
                count: 6
            }
        });
    },

}