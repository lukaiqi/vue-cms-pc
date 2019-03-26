<template>
  <div>
    <button @click="getlist">getlist</button>
    <button @click="getbyid">getbyid</button>
    <button @click="send">send</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [], //json数组，存放json对象
      msg: "" //通过id获取到的json对象
    };
  },
  methods: {
    getlist() {
        // 获取列表的id
        this.axios.get("a.com/getlist").then(res => {
        this.list = res.data;
      });
    },
    getbyid() {
        // 根据id获取详情
      setTimeout(() => {
        //   使用定时器设置时间间隔
          for (let i = 0; i < this.list.length; i++) {
            //   for循环发送请求
              const id = this.list[i].id;
              this.axios.get('a.com/getbyid?id='+id)
              .then(res=>{
                  this.msg=res.data
                //   添加详情的数据到对于的id里
                  this.list[i].detail=this.msg
                  console.log(this.list)
              })
          }
      }, 500);
    },
    send() {
        // 发送数据
      this.axios({
        url: "a.com/postdata",
        method: "post",
        data: {
          list: this.list
        }
      }).then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>