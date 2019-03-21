<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="image in imagelist" :key="image.id">
        <img :src="image.image_url" alt="图片获取失败">
      </el-col>
    </el-row>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size='20'
        @current-change="handleCurrentChange"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagelist: [],
      id: this.$route.params.id,
      currentPage: 1,
      count:0
    };
  },
  created() {
    this.getimagebytypeid();
  },
  methods: {
    getimagebytypeid() {
      console.log(this.$route);
      this.axios.get("api/images/?image_type=" + this.id+'&page='+this.currentPage).then(res => {
        this.imagelist = res.data.results;
        this.count=res.data.count
      });
    },
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getimagebytypeid();
    }
  },
  watch: {
    "$route.path": function(newVal) {
      // 监听路由变化获取新的数据
      this.$router.go(0);
    }
  }
};
</script>
<style scoped>
img {
  height: 400px;
  margin: 10px;
}
.page {
  text-align: center;
  margin-top: 30px;
}
</style>