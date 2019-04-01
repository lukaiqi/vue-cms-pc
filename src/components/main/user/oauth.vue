<template>
  <div>
    <h3>跳转中......</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      info: "",
      logintype: this.$route.query.type
    };
  },
  created() {
    if (this.logintype === "weibo") {
      this.getweibouserinfo();
    } else if (this.logintype === "qq") {
      this.getqquserinfo();
    } else {
      this.getgithubuserinfo();
    }
  },
  methods: {
    getweibouserinfo() {
      var code = this.$route.query.code;
      this.axios("weiboinfo?code=" + code).then(res => {
        if (res.data.status === "0") {
          var userinfo = JSON.parse(res.data.userinfo); //转换为json对象
          this.$store.commit("weibonewoauth", userinfo);
          this.$router.push("/user/bind");
        } else {
          this.$store.commit("oldoauth", res.data);
          this.$router.push("/user/userinfo");
        }
      });
    },
    getqquserinfo() {
      var code = this.$route.query.code;
      this.axios("qqinfo?code=" + code).then(res => {
        if (res.data.status === "0") {
          var userinfo = JSON.parse(res.data.userinfo);
          var obj = {
            userinfo: userinfo,
            openid: res.data.openid
          };
          this.$store.commit("qqnewoauth", obj);
          this.$router.push("/user/bind");
        } else {
          this.$store.commit("oldoauth", res.data);
          this.$router.push("/user/userinfo");
        }
      });
    },
    getgithubuserinfo() {
      var code = this.$route.query.code;
      this.axios("githubinfo?code=" + code).then(res => {
        if (res.data.status === "0") {
          var userinfo = JSON.parse(res.data.userinfo);
          var obj = {
            userinfo: userinfo
            // openid: res.data.openid
          };
          this.$store.commit("githubnewoauth", obj);
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


