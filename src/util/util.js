// 工具类

import juicer from 'juicer'

const OK = 200;
const NEED_LOGIN = 401;

const tipModal = `
<!-- Modal -->
<div class="bdr-none modal fade" data-backdrop="static" tabindex="-1" role="dialog">
    <div class="bdr-none modal-dialog" role="document">
        <div class="bdr-none modal-content">
            <div class="bdr-none modal-header">
                <span class="modal-title" id="staticBackdropLabel">提示</span>
                <button type="button" class="close" data-dismiss="modal">
                    <span>&times;</span>
                </button>
            </div>
            <div class="bdr-none modal-body" id="tip_msg">
                
            </div>
        </div>
    </div>
</div>
`;

export default {

    // host: 'http://101.201.122.174:8080',
    host: 'http://127.0.0.1:8080',

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
                headers: obj.headers || {},
                // 请求发送的数据
                data: obj.data,
                dataType: 'json', // 接收的数据类型
                processData: obj.processData == null ? true : obj.processData,
                contentType: obj.contentType == null ? 'application/x-www-form-urlencoded' : obj.contentType,// 请求时的编码类型
                success(data) {
                    // 成功
                    if (data.code == OK) {
                        resolve(data.data, data.msg);
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
                    console.error('请求出错，请检查网络!错误状态 : ' + textStatus);
                }
            });
        })
    },

    // 错误提示
    errTip(msg) {
        if ($('#tip_modal').length > 0) {
            $('#tip_modal').html(tipModal);
            $('#tip_modal #tip_msg').text(msg);
            $('#tip_modal .modal').modal();
        }
        else {
            alert(msg);
        }
    },
    // 成功提示
    successTip(msg) {
        if ($('#tip_modal').length > 0) {
            $('#tip_modal').html(tipModal);
            $('#tip_modal #tip_msg').text(msg);
            $('#tip_modal .modal').modal();
        }
        else {
            alert(msg);
        }
    },

    // 轻量提示
    simpleTip(msg) {
        $('.alert').hide();
        $('.alert').html(msg).addClass('alert-success').fadeIn().delay(1000).fadeOut();
    },

    // 跳转到登录页面
    goLoginPage() {
        if (window.location.href.indexOf('login') == -1) {
            window.location.href = '/admin/login.html';
        }
    }
}