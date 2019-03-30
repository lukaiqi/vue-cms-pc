<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form label-position="left" label-width="80px">
      <el-form-item label="用户名" required>
        <el-input :value="info.name" :disabled="true" v-if="oauthtype==='weibo'"></el-input>
        <el-input :value="info.nickname" :disabled="true" v-else-if="oauthtype==='qq'"></el-input>
        <el-input :value="info.login" :disabled="true" v-else-if="oauthtype==='github'"></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-input :value="info.id" type="hidden" v-if="oauthtype==='weibo'"></el-input>
        <el-input :value="openid" type="hidden" v-else-if="oauthtype==='weibo'"></el-input>
        <el-input :value="info.id" type="hidden" v-else-if="oauthtype==='github'"></el-input>
      </el-form-item>
      <el-button type="warning" @click="oauthbind">绑定</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      info: this.$store.state.oauthinfo,
      oauthtype: this.$store.state.oauthtype,
      openid: this.$store.state.openid,
    };
  },
  methods: {
    oauthbind() {
      if (this.password === "") {
        return alert("密码不能为空");
      }
      if (this.oauthtype === "weibo") {
        this.axios
          .post("api/oauth_bind/", {
            username: this.info.name,
            password: this.password,
            oauthtoken: this.info.id
          })
          .then(res => {
            this.$store.commit("login", res.data);
            this.$router.push("/user/userinfo");
          });
      } else if (this.oauthtype === "qq") {
        this.axios
          .post("api/oauth_bind/", {
            username: this.info.nickname,
            password: this.password,
            oauthtoken: this.openid
          })
          .then(res => {
            this.$store.commit("login", res.data);
            this.$router.push("/user/userinfo");
          });
      }
      else {
        this.axios
          .post("api/oauth_bind/", {
            username: this.info.login,
            password: this.password,
            oauthtoken: this.info.id
          })
          .then(res => {
            this.$store.commit("login", res.data);
            this.$router.push("/user/userinfo");
          });
      }
    }
  }
};
</script>