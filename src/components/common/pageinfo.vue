<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :total="count"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      currentPage: 1
    };
  },
  methods: {
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getlist();
    }
  }
};
</script>
