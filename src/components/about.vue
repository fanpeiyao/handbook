<template>
  <div class="row">
    <div class="container">
      <div class="col s12">
        <h2 class="header">{{about.msg}}</h2>
        <p class="caption" v-html="about.detail"></p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        about:config.about,
      }
    }
  }
</script>
