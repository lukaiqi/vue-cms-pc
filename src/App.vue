<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <router-view name="header"></router-view>
      </el-header>
      <!-- 中间 -->
      <el-main>
        <router-view name="main"></router-view>
      </el-main>
      <!-- 底部 -->
      <el-footer>
        <router-view name="footer"></router-view>
      </el-footer>
    </el-container>
  </div>
</template>


