import './about.css'
import banner from '../../layout/common/banner/banner'

$(function () {
    sessionStorage.setItem('nth-nav', 3);
    banner('关于我', '介绍一下自己哦~');
})