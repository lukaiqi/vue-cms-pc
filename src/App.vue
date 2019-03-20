<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <router-view name="header"></router-view>
      </el-header>
      <el-container>
        <!-- 左侧 -->
        <el-aside width="200px">
          <router-view name="left"></router-view>
        </el-aside>
        <el-container>
          <!-- 中间 -->
          <el-main>
            <router-view name="main"></router-view>
          </el-main>
          <!-- 底部 -->
          <el-footer>
            <router-view name="footer"></router-view>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
</script>

<style lang="scss" scoped>
</style>

