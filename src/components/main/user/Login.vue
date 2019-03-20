<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form label-position="left" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" clearable show-password></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username | (this.password === "")) {
        alert("sssssssss");
      } else {
        this.axios({
          url: "login",
          method: "post",
          data: {
            username: this.username,
            password: this.password
          }
        }).then(res => {
          if (res.status === 200) {
            setTimeout(() => {
              this.$router.push("/user/userinfo");
            }, 200);
          } else {
            alert("检查用户名和密码");
          }
        });
      }
    }
  }
}
</script>