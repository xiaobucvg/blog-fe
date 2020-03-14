// 工具类
export default {
    // 获取地址栏参数
    getUrlParamter(key) {
        let searchString = window.location.href.split('?')[1];
        let searchArr = searchString.split('&');
        searchArr.forEach(e => {
            let k = e.split('=')[0];
            let v = e.split('=')[1];
            if (k == key) {
                return v;
            }
        });
        return null;
    }
}