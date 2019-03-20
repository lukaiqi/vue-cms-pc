<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="info.name"></el-input>
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
      <el-form-item label="电话">
        <el-input v-model="info.mobile" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeinfo">修改信息</el-button>
        <el-button>退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: ""
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.axios({
        url: "api/users/1",
        method: "get",
        headers: {
          Authorization:
            "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMCwidXNlcm5hbWUiOiIxODc4MDYzODg0NyIsImV4cCI6MTU1MzI1NjYyNSwiZW1haWwiOm51bGx9.eIe5sAqVt94teMKbQNWjfGpjccQyUSQL3nyk8odiXL0"
        }
      }).then(res => {
        this.info = res.data;
      });
    },
    changeinfo() {
      this.axios({
        url: "api/users/1/",
        method: "patch",
        headers: {
          Authorization:
            "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMCwidXNlcm5hbWUiOiIxODc4MDYzODg0NyIsImV4cCI6MTU1MzI1NjYyNSwiZW1haWwiOm51bGx9.eIe5sAqVt94teMKbQNWjfGpjccQyUSQL3nyk8odiXL0"
        },
        data: {
          name: this.info.name,
          gender: this.info.gender,
          birthday: this.info.birthday,
          email: this.info.email
        }
      }).then(res => {
          alert('修改成功')
      });
    },
    logout(){
        
    }
  }
};
</script>
<style>
.el-input {
  width: 300px !important;
}
</style>