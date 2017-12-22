<template>
  <div>
    <h1>{{msg}}</h1>
    <p v-html="detail"></p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "前端资源仓库",
        detail:'前端资源仓库集成了工银聚团队开发必须的开发框架及文档介绍。。。'
      }
    }
  }
</script>
