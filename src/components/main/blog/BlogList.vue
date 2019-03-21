<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="item in list" :key="item.id">
        <router-link :to="'/blog/bloginfo/'+item.id">
          <div class="list">
            <h3>{{item.title}}</h3>
            <p>
              <span>发表时间：{{item.add_time|dateFormat}}</span>
            </p>
            <span>点击数{{item.click_num}}</span>
            <span>评论数{{item.comment_num}}</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
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
      list: [],
      count: 0,
      currentPage: 1
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.axios
        .get("api/list/?ordering=-add_time&page=" + this.currentPage)
        .then(res => {
          this.list = res.data.results;
          this.count = res.data.count;
        });
    },
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getlist();
    }
  }
};
</script>

<style scoped>
.page {
  text-align: center;
  margin-top: 30px;
}
.list {
  color: black;
  background-color: #ccc;
  width: 80%;
  height: 150px;
}
</style>
