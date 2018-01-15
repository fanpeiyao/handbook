<template>
    <div class="section no-pad-bot" >
      <!--小、中屏标题栏-->
      <div class="like-tab">
        <a :href="about.backHref"><i class="material-icons" v-if="$route.params.showDetail">navigate_before</i></a>
        <div class="container center white-text">
          {{about.header}}
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

