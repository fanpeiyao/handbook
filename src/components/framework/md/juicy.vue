<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "juicy"
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.query.showDetail)
      }
    }
  }
</script>
