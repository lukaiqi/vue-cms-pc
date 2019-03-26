<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="info.name" placeholder="请设置昵称"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <template>
          <el-radio v-model="info.gender" label="male">男</el-radio>
          <el-radio v-model="info.gender" label="female">女</el-radio>
        </template>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="info.birthday"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="info.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" required>
        <el-input v-model="info.mobile" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeinfo">修改信息</el-button>
        <el-button @click="logout">退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userid: this.$store.state.userid,
      info: "",
      islogin: this.$store.state.islogin
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      if (this.islogin === "true") {
        this.axios({
          url: "api/users/" + this.userid,
          method: "get",
          headers: {
            Authorization: "JWT " + this.$store.state.token
          }
        }).then(res => {
          this.info = res.data;
        });
      } else {
        this.$router.push("/user/login");
      }
    },
    changeinfo() {
      this.axios({
        url: "api/users/1/",
        method: "patch",
        headers: {
          Authorization: "JWT " + this.$store.state.token
        },
        data: {
          name: this.info.name,
          gender: this.info.gender,
          birthday: this.info.birthday,
          email: this.info.email
        }
      }).then(res => {
        alert("修改成功");
      });
    },
    logout() {
      this.$store.commit("logout");
      setTimeout(() => {
        this.$router.push("/user/login");
      }, 1000);
    }
  }
};
</script>
<style>
.el-input {
  width: 300px !important;
}
</style>