<template>
  <div>
    <h1>{{msg}}</h1>
    <!--{{$route.params.modules.children}}-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "假如我是第一个juicy",
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.query.showDetail)
      }
    }
  }
</script>
