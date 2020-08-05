import './links.css'
import banner from '../../layout/common/banner/banner'
import '@/layout/common/sidebar/sidebar'
import articleService from '@/service/article-service'

const link = {
    init() {
        sessionStorage.setItem('nth-nav', 2);
        banner('Friend Links', 'we are familay');

        this.showLinkArticle();
    },

    // 显示友情链接文章
    showLinkArticle() {
        articleService.getLinkArticle().then(data => {
            $('#article').html(data.content);
        });
    }
}

$(function () {
    link.init();
});