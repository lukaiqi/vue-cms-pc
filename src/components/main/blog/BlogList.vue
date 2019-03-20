<template>
  <div>
    <el-row class="tac">
      <el-col :span="20">
        <ul>
          <li class="list" v-for="item in list" :key="item.id">
            <router-link :to="'/blog/bloginfo/'+item.id">
              <h3>{{item.title}}</h3>
              <p class="info">
                <span>发表时间：{{item.add_time|dateFormat}}</span>
                <span>点击数{{item.click_num}}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.axios.get("api/list").then(res => {
        this.list = res.data.results;
      });
    }
  }
};
</script>
<style>
.list {
  border-radius: 4px;
  background-color: rgb(93, 155, 236);
  list-style: none;
}
.info{
  display: flex;
  justify-content: space-between
}
</style>
