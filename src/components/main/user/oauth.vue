<template>
  <div>
    <!-- <div style="margin: 20px;"></div>
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
    </el-form> -->
    <h3>456</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      info: ""
    };
  },
  created() {
    this.getuserinfo();
  },
  methods: {
    getuserinfo() {
      // console.log(this.$route.query)
      var code = this.$route.query.code;
      this.axios("weiboinfo?code=" + code).then(res => {
        if (res.data.status === "0") {
          var obj = JSON.parse(res.data.userinfo)
          this.$store.commit("newoauth", obj);
          this.$router.push("/user/bind");
        } else {
          this.$store.commit("oldoauth", res.data);
          this.$router.push("/user/userinfo");
        }
      });
    }
  }
};
</script>



