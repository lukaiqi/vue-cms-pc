<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.type {
  text-align: center;
  font-size: 20px;
}
</style>
