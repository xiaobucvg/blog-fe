// 工具类

import juicer from 'juicer'

const OK = 200;
const NEED_LOGIN = 401;


export default {

    devHost: '/api',
    Host: '',

    // 模板渲染数据
    renderHtml(template, data) {
        return juicer(template, data);
    },

    // 获取地址栏参数
    getUrlParamter(key) {
        let searchString = window.location.search;
        if (searchString.length > 0) {
            searchString = searchString.split('?')[1];
        }
        let searchArr = searchString.split('&');
        let res = null;
        searchArr.forEach(e => {
            let k = e.split('=')[0];
            let v = e.split('=')[1];
            if (k == key) {
                res = v;
            }
        });
        return res;
    },

    // 发送 ajax 请求
    request(obj) {
        let that = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                type: obj.type || 'GET',
                url: obj.url,    // 请求地址
                // 请求发送的数据
                data: obj.data,
                dataType: 'json', // 接收的数据类型
                processData: obj.processData == null ? true : obj.processData,
                contentType: obj.contentType || 'application/x-www-form-urlencoded',// 请求时的编码类型
                success(data) {
                    // 成功
                    if (data.code == OK) {
                        resolve(data.data);
                    }
                    // 需要登录
                    else if (data.code == NEED_LOGIN) {
                        that.goLoginPage();
                    }
                    // 失败
                    else {
                        reject(data);
                    }
                },
                error(XMLHttpRequest, textStatus, errorThrown) {
                    that.errTip('请求出错，请检查网络!错误状态 : ' + textStatus);
                }
            });
        })
    },

    // 错误提示
    errTip(msg) {
        if ($('#tick_modal').length > 0) {
            $('#tick_modal #tick_msg').text(msg);
            $('#tick_modal').modal();
        }
        else {
            alert(msg);
        }
    },
    successTip(msg) {
        if ($('#tick_modal').length > 0) {
            $('#tick_modal #tick_msg').text(msg);
            $('#tick_modal').modal();
        }
        else {
            alert(msg);
        }
    },

    // 跳转到登录页面
    goLoginPage() {
        window.location.href = '/admin/login.html';
    }
}