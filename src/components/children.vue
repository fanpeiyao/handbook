<template>
  <div>
    <h1>{{msg}}</h1>
    <h1>{{data}}</h1>

    <h1>{{ret}}</h1>


    {{$route.params.modules.children}}
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "假如我是第一个juicy",
        data:'',
        ret:''
      }
    },
    mounted(){
      this.$nextTick(()=>{
        var that=this;
        /*$.ajax({
          type:"get",
          url:"http://shake.applinzi.com/aa.json",
          data:{user_id:1},
          success:function(data){
            that.ret=data.ret;
            that.data=data.data;
          }
        })*/
      })
    }

  }
</script>
