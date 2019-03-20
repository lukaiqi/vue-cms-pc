<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/blog/bloglist">文章</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/image">图片</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/music">音乐</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/user/userinfo">个人中心</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {}
};
</script>