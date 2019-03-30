<template>
  <div>
    <el-form label-position="left" label-width="70px">
      <el-form-item label="用户名">
        <el-input v-model="username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" clearable show-password></el-input>
      </el-form-item>

      <div class="commit">
        <el-button type="primary" @click="login" :loading="flag">登录</el-button>
        <el-button type="warning" @click="reg">注册</el-button>
        <p>
          <span>其他登录方式:&nbsp;</span>
          <a :href="weibo_auth_url">
            <img src="https://lkqblog.cn/media/weibo.png" alt="weibo">
          </a>
          &nbsp;
          <a :href="qq_auth_url">
            <img src="https://lkqblog.cn/media/qq.png" alt="qq">
          </a>
          &nbsp;
          <a :href="github_auth_url">
            <img src="https://lkqblog.cn/media/github.png" alt="github">
          </a>
        </p>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      flag: false,
      weibo_auth_url: "",
      qq_auth_url: "",
      github_auth_url: ""
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
              this.$store.commit("login", {
                userid: res.data.userid,
                name: this.username,
                token: res.data.token
              });
              this.$router.push("/user/userinfo");
            }, 1000);
          }
        });
      }
    },
    reg() {
      this.$router.push("/user/bind");
    },
    weibo_url() {
      this.axios.get("weibologin").then(res => {
        this.weibo_auth_url = res.data;
      });
    },
    qq_url() {
      this.axios.get("qqlogin").then(res => {
        this.qq_auth_url = res.data;
      });
    },
    github_url() {
      this.axios.get("githublogin").then(res => {
        this.github_auth_url = res.data;
      });
    }
  },
  mounted() {
    this.weibo_url(), this.qq_url(), this.github_url();
  }
};
</script>
<style lang="scss">
.commit {
  margin: 0 102px;
}
// .login{
//   width: 40%;
//   height: 40%;
// }
</style>