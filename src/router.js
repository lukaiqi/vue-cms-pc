// 导入vue-router
import VueRouter from 'vue-router'
import BlogList from './components/main/blog/BlogList.vue'
import BlogInfo from './components/main/blog/BlogInfo.vue'
import Comment from './components/main/blog/Comment.vue'
import Image from './components/main/image/Image.vue'
import Music from './components/main/music/Music.vue'
import UserInfo from './components/main/user/UserInfo.vue'
import Login from './components/main/user/Login.vue'
import Register from './components/main/user/Register.vue'
import Header from './components/common/Header.vue'
import Left from './components/common/Left.vue'
import Footer from './components/common/Footer.vue'
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/blog/bloglist'},
        {path:'/blog/bloglist',components:{
            header:Header,
            left:Left,
            footer:Footer,
            main:BlogList
        }}
    ]
})

export default router