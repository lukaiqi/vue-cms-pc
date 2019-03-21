<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/blog/bloglist">文章</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">图片精选</template>
        <el-menu-item v-for="tag in tags" :key="tag.id">
          <router-link :to="'/image/'+tag.id">{{tag.type_name}}</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/music">音乐推荐</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/user/userinfo">个人中心</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import imege from "../main/image/Image.vue";
export default {
  data() {
    return {
      activeIndex: "1",
      tags: []
    };
  },
  created() {
    this.gettags();
  },
  methods: {
    gettags() {
      this.axios.get("api/imagetype").then(res => {
        this.tags = res.data.results;
      });
    }
  }
};
</script>