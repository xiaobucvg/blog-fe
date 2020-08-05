// 文章服务

import util from '@/util/util'


export default {

    articleStatus: {
        PUBLISHED: 1001,
        NOT_PUBLISHED: 1002,
        DELETED: 1003,
    },


    // 后台

    // 上传图片
    postImg(img) {
        let fomrData = new FormData();
        fomrData.append('img', img);
        return util.request({
            url: util.host + '/admin/articles/image',
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            type: 'POST',
            processData: false,
            data: fomrData,
            contentType: false,
        });
    },

    // 获取已删除文章
    getDeletedArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: 'update_time', rule: 'desc' }] };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.host + '/admin/articles/deleted-articles',
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            }))
        });
    },

    // 删除文章
    deleteArticle(id) {
        let url = '';
        if (id == null || id == undefined || id == false) {
            url = util.host + '/admin/articles'
        }
        else {
            url = util.host + '/admin/articles?ids=' + id
        }
        return util.request({
            url,
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            type: 'DELETE',
            contentType: 'application/json',
        });
    },

    // 分页获取文章
    getArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "id", rule: "desc" }], keywords: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            })) + '&keywords=' + obj.keywords
        });
    },
    // 文章置为删除状态
    setDeleted(id) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles?ids=' + id + '&statusCode=' + this.articleStatus.DELETED,
            type: 'PUT',
            contentType: 'application/json',
        });
    },
    // 文章置为发布状态
    setPublished(id) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles?ids=' + id + '&statusCode=' + this.articleStatus.PUBLISHED,
            type: 'PUT',
            contentType: 'application/json',
        });
    },
    // 文章置为未发布状态
    setNotPublished(id) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles?ids=' + id + '&statusCode=' + this.articleStatus.NOT_PUBLISHED,
            type: 'PUT',
            contentType: 'application/json',
        });
    },
    // 获取文章详细数据
    getDetailArticle(id) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles/article?id=' + id,
            type: 'GET',
            contentType: 'application/json'
        })
    },
    // 更新/保存文章
    saveArticle(data) {
        return util.request({
            headers: {
                'auth-token': window.localStorage.getItem('token')
            },
            url: util.host + '/admin/articles',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
    },

    // 前台


    // 获取关于我文章详细信息
    getAboutArticle() {
        return util.request({
            url: util.host + '/articles/about-article',
            type: 'GET',
            contentType: 'application/json'
        })
    },

    //获取友情链接文章详细内容
    getLinkArticle() {
        return util.request({
            url: util.host + '/articles/link-article',
            type: 'GET',
            contentType: 'application/json'
        })
    },

    // 分页获取文章
    // - 可以根据关键词
    // - 可以获取标签下的文章
    getPublishedArticles(obj) {
        let defaultObj = { startPage: 1, count: 10, sorts: [{ name: "id", rule: "desc" }], keywords: "", tagid: "" };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.host + '/articles',
            type: 'GET',
            contentType: 'application/json',
            data: 'json=' + encodeURI(JSON.stringify({
                startPage: obj.startPage,
                count: obj.count,
                sorts: obj.sorts
            })) + '&keywords=' + obj.keywords + '&tagid=' + obj.tagid
        });
    },

    // 获取文章详细数据
    getPublishedDetailArticle(id) {
        return util.request({
            url: util.host + '/articles/article?id=' + id,
            type: 'GET',
            contentType: 'application/json'
        })
    },

    // 查询归档
    getArchive(obj) {
        let defaultObj = { startPage: 1, count: 100000, sorts: [] };
        obj = Object.assign(defaultObj, obj);
        return util.request({
            url: util.host + '/articles/archives',
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
            url: util.host + '/articles/hot-articles',
            type: 'GET',
            data: {
                count: 6
            }
        });
    },


}