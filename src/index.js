// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入app组件
import app from './App.vue'
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios
// 设置axios根路径
axios.defaults.baseURL = 'https://lkqblog.cn/'
// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// 引入router
import router from './router.js'
// 引入cookies
import cookie from './lib/cookie.js'
Vue.prototype.cookie = cookie
// 引入时间字符串格式化
import moment from 'moment'
// 全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm") {
    return moment(dateStr).format(pattern)
})
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 获取cookie的值初始化vuex
var userid = cookie.getCookie('userid')
var name = cookie.getCookie('name')
var token = cookie.getCookie('token')
var islogin = cookie.getCookie('islogin')
import './base.css'
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化vuex
const store = new Vuex.Store({
    state: {
        userid: userid,
        name: name,
        token: token,
        islogin: islogin,
        oauthinfo: '',
        oauthtype: '',
        openid: '',
    },
    mutations: {
        login(state, obj) {
            cookie.setCookie('userid', obj.userid, 7)
            cookie.setCookie('name', obj.name, 7)
            cookie.setCookie('token', obj.token, 7)
            cookie.setCookie('islogin', 'true', 7)
            state.name = obj.name
            state.token = obj.token
            state.islogin = 'true'
            state.userid = obj.userid
        },
        logout(state) {
            cookie.delCookie('userid')
            cookie.delCookie('name')
            cookie.delCookie('token')
            cookie.setCookie('islogin', 'false')
            state.islogin = 'false'
        },
        weibonewoauth(state, obj) {
            state.oauthinfo = obj
            state.oauthtype = 'weibo'
        },
        qqnewoauth(state, obj) {
            state.oauthinfo = obj.userinfo
            state.oauthtype = 'qq'
            state.openid = obj.openid
        },
        githubnewoauth(state, obj) {
            state.oauthinfo = obj.userinfo
            state.oauthtype = 'github'
        },
        oldoauth(state, obj) {
            state.name = obj.name
            state.token = obj.token
            state.islogin = 'true'
            state.userid = obj.userid
            cookie.setCookie('userid', obj.userid, 7)
            cookie.setCookie('name', obj.name, 7)
            cookie.setCookie('token', obj.token, 7)
            cookie.setCookie('islogin', 'true', 7)
        }
    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})