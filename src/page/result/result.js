import './result.css'
import banner from '../../layout/common/banner/banner'

$(function () {
    sessionStorage.setItem('nth-nav', -1);
    banner('Result', `包含‘java’的搜索结果`);
})