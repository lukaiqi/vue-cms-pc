<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/blog/bloglist/">文章</router-link>
      </li>
      <li class="submenu">
        <a href>图片分享</a>
        <p v-for="(tag, index) in tags" :key="index">
          <router-link :to="'/image/'+tag.id+'/'">{{tag.type_name}}</router-link>
        </p>
      </li>
      <li>
        <router-link to="/music/">音乐分享</router-link>
      </li>
      <li v-if="flag">
        <router-link to="/user/login/">登录/注册</router-link>
      </li>
      <li v-if="!flag">
        <a>用户名</a>
        <p>
          <a href="/user/userinfo/">个人中心</a>
        </p>
        <p>
          <a @click="logout">退出</a>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [],
      flag: false
    };
  },
  created() {
    this.activeIndex = this.cookie.getCookie("tabindex"); //刷新之后获取索引
  },
  methods: {
    gettags() {
      this.axios.get("api/imagetype").then(res => {
        this.tags = res.data.results;
      });
    },
    logout() {
      this.$store.commit("logout");
      setTimeout(() => {
        this.$router.push("/user/login");
      }, 1000);
    }
  },
  mounted() {
    this.gettags();
    if (this.$route.path === "/") {
      //高亮回到文章
      this.activeIndex = "1";
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.nav {
  width: 100%;
  height: 60px;
  list-style: none;
  background-color: #ccc;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}
.nav li {
  float: left;
  line-height: 60px;
  margin: 0 40px;
}
.nav li:last-child {
  float: right;
  cursor: pointer;
}
.nav li:last-child p {
  display: none; /*隐藏元素*/
}

.nav li:last-child:hover p {
  display: block;
  background-color: #ccc;
  text-align: center;
  line-height: 30px;
}
.submenu p {
  display: none;
}

.submenu:hover p {
  display: block;
  background-color: #ccc;
  text-align: center;
  line-height: 30px;
}
</style>