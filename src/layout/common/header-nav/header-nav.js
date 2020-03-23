const nav = {

    init() {
        this.bindEvent();

    },

    bindEvent() {

        $("#search_btn").click(() => {
            let keywords = $("#keywords_input").val().trim();
            if (keywords != null && keywords.length > 0) {
                window.location.href = "/result.html?keywords=" + keywords;
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