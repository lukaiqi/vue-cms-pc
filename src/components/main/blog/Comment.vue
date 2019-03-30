<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea v-model="msg" placeholder="请输入要评论的内容（最多120字）" maxlength="120"></textarea>
    <p class="status" v-if="islogin">{{this.$store.state.name}}: 欢迎评论</p>

    <p class="status" v-if="!islogin">请登录后再评论</p>
    <el-button type="primary" size="large" @click="postcomment">发表评论</el-button>
    <ul>
      <div v-for="item in CommentList" :key="item.id">
        <li class="title">发表时间：{{item.add_time|dateFormat}}</li>
        <li class="content">{{item.text}}</li>
      </div>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="20"
      @current-change="handleCurrentChange"
      :total="count"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      CommentList: [],
      count: 0,
      currentPage: 1,
      msg: "", //评论框中的内容
      islogin: this.$store.state.islogin
    };
  },
  created() {
    this.getCommentList();
  },
  methods: {
    getCommentList() {
      // 判断是否登陆
      if(this.islogin==='true'){
        this.islogin=true
      }
      else{
        this.islogin=false
      }
      this.axios
        .get(
          "api/comment/?ordering=-add_time&title=" +
            this.id +
            "&page=" +
            this.currentPage
        )
        .then(res => {
          this.CommentList = res.data.results;
          this.count = res.data.count;
        });
    },
    postcomment() {
      if (this.islogin === 'false') {
        return alert("未登录不能评论");
      }
      if (this.msg.trim().length == 0) {
        return alert("评论内容不能为空");
      }
      this.axios({
        method: "post",
        url: "api/comment/",
        headers: {
          Authorization: "JWT " + this.$store.state.token
        },
        data: {
          csrfmiddlewaretoken:
            "WoZovCdi6Wnw64o47tumESfArASnHf8soNKjRVjGfrMYfvbTwmPAEUsJdbFeM92f",
          title: this.id,
          text: this.msg.trim()
        }
      }).then(res => {
        if (res.status == 201) {
          var cmt = {
            add_time: new Date(),
            text: this.msg,
            user: this.$store.getters.comment
          };
          this.CommentList.unshift(cmt);
          this.msg = "";
        }
      });
    },
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getCommentList();
    }
  }
};
</script>
<style>
h3 {
  font-size: 18px !important;
}
textarea {
  font-size: 14px !important;
  height: 85px;
  width: 800px;
  margin: 0 !important;
}
.title {
  font-size: 13px !important;
  line-height: 30px;
  background-color: #ccc;
  list-style: none;
}
.content {
  font-size: 13px !important;
  line-height: 35px;
  text-indent: 2em;
  list-style: none;
}
.status {
  color: red;
}
</style>
