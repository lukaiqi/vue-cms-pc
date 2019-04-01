<template>
  <div>
    <div class="down">
      <h3>{{info.title}}</h3>
      <p>
        <span>发表时间{{info.add_time}}</span>
        <span>点击数{{info.click_num}}</span>
      </p>
      <div v-html="info.content"></div>
    </div>
    <comment-box></comment-box>
  </div>
</template>
<script>
import comment from "./Comment.vue";
export default {
  data() {
    return {
      info: "",
      id: this.$route.params.id,
      flag: false
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.axios.get("api/list/" + this.id).then(res => {
        this.info = res.data;
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

