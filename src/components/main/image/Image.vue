<template>
  <div>
    <ul>
      <li v-for="image in imagelist" :key="image.id">
        <img :src="image.image_url" alt="图片获取失败">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagelist: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.getimagebytypeid();
  },
  methods: {
    getimagebytypeid() {
        console.log(this.$route)
      this.axios.get("api/images/?image_type=" + this.id).then(res => {
        this.imagelist = res.data.results;
      });
    }
  },
  watch: {
    "$route.path": function(newVal) {
        // 监听路由变化获取新的数据
        this.$router.go(0)
    }
  }
};
</script>