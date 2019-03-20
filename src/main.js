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
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化vuex
const store = new Vuex.Store({
    state: {
        name: '',
        token: ''
    },
    mutations: {
        login(state, obj) {
           cookie.setCookie('name',obj.name),
           cookie.setCookie('token',obj.token)
        },
        logout(state){
            cookie.delCookie('name'),
            cookie.delCookie('token')
        }
    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})