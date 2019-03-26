<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form label-position="left" label-width="80px">
      <el-form-item label="用户名" required>
        <el-input v-model="info.name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="info.id" type="hidden"></el-input>
      </el-form-item>
      <el-button type="warning" @click="binduser">绑定</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      info: this.$store.state.oauthinfo
    };
  },

  methods: {
    binduser() {
      if (this.password === "") {
        return alert("密码不能为空");
      }
      this.axios
        .post("api/weibo_bind/", {
          username: this.info.name,
          password: this.password,
          oauthtoken: this.info.id
        })
        .then(res => {
          this.$store.commit('login',res.data)
          this.$router.push('/user/userinfo')
        });
    }
  }
};
</script>