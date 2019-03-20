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
      <el-button type="primary" @click="login" :loading="flag">登录</el-button>
      <el-button type="warning">注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      flag: false
    };
  },
  methods: {
    login() {
      if (this.username === "") {
        alert("用户名不能为空");
      } else if (this.password === "") {
        alert("密码不能为空");
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
            this.flag = true;
            setTimeout(() => {
              this.flag = false;
              this.$store.commit('login',{
                name: this.username,
                token: res.data.token
              });
              this.$router.push("/user/userinfo");
            }, 1000);
          }
        });
      }
    }
  }
};
</script>