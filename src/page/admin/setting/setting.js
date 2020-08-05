import './setting.css'
import depot from './depot'
import userinfo from './userinfo'
import password from './password'

const setting = {


    init() {
        userinfo.init();
        depot.init();
        password.init();
    },

}

$(function () {
    setting.init();
})