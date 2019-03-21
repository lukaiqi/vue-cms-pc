<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="music in  musiclist" :key="music.id">
        <iframe
          frameborder="no"
          border="0"
          marginwidth="0"
          marginheight="0"
          width="330"
          height="86"
          :src="'//music.163.com/outchain/player?type=2&auto=0&height=66&id='+music.music_url"
        ></iframe>
      </el-col>
    </el-row>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      musiclist: [],
      currentPage: 1,
      count: 0
    };
  },
  created() {
    this.getmusic();
  },
  methods: {
    getmusic() {
      this.axios.get("api/music/?page="+this.currentPage).then(res => {
        (this.musiclist = res.data.results), (this.count = res.data.count);
      });
    },
    handleCurrentChange(currentPage) {
      //页码变化的回调
      this.currentPage = currentPage;
      this.getmusic();
    }
  }
};
</script>
<style>
.page {
  text-align: center;
  margin-top: 30px;
}
</style>
