<template>
  <div>
    <h1>{{msg}}</h1>
    <h2> {{ $route.query.showDetail }}</h2>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "juicy"
      }
    },
//    motheds: {
//      getData () {
//        console.log(this.$route.query.showDetail)
//      }
//    },
//    mounted () {
//      this.getData()
//    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.query.showDetail)
      }
    }
  }
</script>
