<template>
    <div class="section no-pad-bot" >
      <!--小、中屏标题栏-->
      <div class="like-tab">
        <div class="container center white-text">
          WELCOME
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        modules:config.modules,
        logo:require('./../assets/img/logo.png')
      }
    }
  }
  $(function () {
    $('.top-nav').sideNav();
  })
</script>
