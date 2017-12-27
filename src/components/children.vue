<template>
  <div>
    <h1>{{$route.params.modules}}下的</h1>
    <h1>{{$route.params.module}}</h1>

  </div>
</template>
<script>

  import './../assets/js/marked.min'
  import './../assets/js/prettify.min'
//  import './../assets/js/raphael.min'
  import './../assets/js/underscore.min'
//  import './../assets/js/sequence-diagram.min'
  import './../assets/js/flowchart.min'
  import './../assets/js/jquery.flowchart.min'
  import './../assets/js/editormd.min'


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
