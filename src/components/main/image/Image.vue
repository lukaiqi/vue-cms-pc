<template>
  <div>
    <div class="clearfix  down">
      <ul>
        <li v-for="(image, index) in imagelist" :key="index">
          <img :src="image.image_url" alt>
        </li>
      </ul>
    </div>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="20"
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
      count: 0,
      loading: true
    };
  },
  created() {
    this.getimagebytypeid();
  },
  methods: {
    getimagebytypeid() {
      this.axios
        .get("api/images/?image_type=" + this.id + "&page=" + this.currentPage)
        .then(res => {
          this.imagelist = res.data.results;
          this.count = res.data.count;
        });
    },
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getimagebytypeid();
    },
    imgloading() {
      this.loading = false;
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

ul li {
  width: 200px;
  height: 300px;
  margin: 8px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
  float: left;
}
img {
  height: 300px;
  float: left;
}

</style>