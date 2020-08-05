import './about.css'
import banner from '../../layout/common/banner/banner'
import '@/layout/common/sidebar/sidebar'

import articleService from '@/service/article-service'

const about = {
    init() {
        sessionStorage.setItem('nth-nav', 3);
        banner('About Me', '海賊王になる男です');

        this.showAboutArticle();
    },

    // 显示友情链接文章
    showAboutArticle() {
        articleService.getAboutArticle().then(data => {
            $('#article').html(data.content);
        });
    }
}

$(function () {
    about.init();
});