<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#00f"
      :default-active="activeIndex"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/blog/bloglist">文章</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">图片精选</template>
        <el-menu-item v-for="tag in tags" :key="tag.id" :index="'2-'+tag.id">
          <router-link :to="'/image/'+tag.id+'/'">{{tag.type_name}}</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/music">音乐推荐</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/user/userinfo">用户中心</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      tags: []
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
    handleSelect(index) {
      this.activeIndex = index; //设置高亮索引
      this.cookie.setCookie('tabindex',index)
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
a:hover {
  color: orange !important;
}
a {
  text-decoration: none;
}
</style>