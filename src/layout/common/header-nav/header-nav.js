$(function () {
    // 当前链接增加高亮
    setTimeout(() => {
        let index = sessionStorage.getItem('nth-nav');
        if (index > -1) {
            $($('#header_nav .nav-link')[index]).addClass('active');
        }
    }, 100)
})