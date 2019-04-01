<template>
  <div>
    <div class="down container clearfix">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div class="list">
            <h3>
              <router-link :to="'/blog/bloginfo/'+item.id">{{item.title}}</router-link>
            </h3>
            <p>
              <span>发表时间：{{item.add_time|dateFormat}}</span>
            </p>
            <span>点击数{{item.click_num}}</span>
            <span>评论数{{item.comment_num}}</span>
          </div>
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
<style lang="scss" scoped>
.down li {
  width: 20%;
  background-color: #ddd;
  border-radius: 15px;
  height: 150px;
  margin: 20px;
  display: block;
  text-align: center;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  float: left;
}
.down h3 {
  color: #fd56ee;
  margin-top: 10px;
  margin-bottom: 30px;
  white-space: nowrap; /* 首先先需要添加这句话 强制一行*/
  overflow: hidden; /* 其次必须有这句话 */
  text-overflow: ellipsis; /* 超出的部分，省略号代替 */
}
.down p {
  margin-bottom: 18px;
}

</style>
