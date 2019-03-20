<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form label-position="left" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="mobile" clearable></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="code" clearable></el-input>
        <el-button type="info" @click="sendmsg">发送验证码</el-button>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="repassword" clearable show-password></el-input>
      </el-form-item>
      <el-button type="success" @click="register">注册</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      password: "",
      repassword: "",
      code: ""
    };
  },
  methods: {
    register() {
      if (this.mobile === "") {
        alert("手机号不能为空");
      } else if (this.code === "") {
        alert("验证码不能为空");
      } else if (this.password === "") {
        alert("密码不能为空");
      } else if (this.password !== this.repassword) {
        alert("两次密码输入不一致");
      } else {
        this.axios({
          url: "api/users",
          method: "post",
          data: {
            username: this.username,
            password: this.password,
            code: this.code
          }
        }).then(res => {
          if (res.status === 201) {
            setTimeout(() => {
              this.$router.push("/user/login");
            }, 200);
          } else {
            alert("检查用户名和密码");
          }
        });
      }
    },
    sendmsg() {
      if (this.mobile === "") {
        alert("手机号不能为空");
      } else {
        this.axios({
          url: "api/code",
          method: "get",
          params: {
            mobile: this.mobile,
            code: this.code
          }
        });
      }
    }
  }
};
</script>