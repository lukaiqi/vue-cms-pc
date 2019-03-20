// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 引入app组件
import app from './app.vue'
// 引入axios
import axios from 'axios'
Vue.prototype.axios = axios
// 设置axios根路径
axios.defaults.baseURL = 'https://lkqblog.cn/'
// 引入router
import router from './router.js'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化vuex
const store = new Vuex.Store({
    state: {

    },
    mutations: {

    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})