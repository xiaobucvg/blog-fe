const nav = {

    b: 0,

    init() {
        this.bindEvent();
    },

    bindEvent() {

        // 搜索按钮
        $("#search_btn").click(() => {
            let keywords = $("#keywords_input").val().trim();
            if (keywords != null && keywords.length > 0) {
                window.location.href = "/result.html?keywords=" + keywords;
            }

        });

        // 页面上滚显示导航
        $(window).scroll(function () {
            let t = $(this).scrollTop();
            // 向上滚动
            if (this.b >= t) {
                $('#header_nav_wrapper').slideDown();
                $('#header_nav_wrapper').removeClass('bg-dark');
                $('#header_nav_wrapper').addClass('bg-white');
            }
            // 向下滚动
            else {
                if (this.b >= 200) {
                    $('#header_nav_wrapper').slideUp();
                }
            }
            this.b = t;
            if (this.b <= 200) {
                $('#header_nav_wrapper').addClass('bg-dark');
                $('#header_nav_wrapper').removeClass('bg-white');
            }
        });
    }

}

$(function () {
    // 当前链接增加高亮
    setTimeout(() => {
        let index = sessionStorage.getItem('nth-nav');
        if (index > -1) {
            $($('#header_nav .nav-link')[index]).addClass('active');
        }

        nav.init();
    }, 100);


})