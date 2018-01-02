<!--侧栏-->
<template>
<header>
  <div class="container">
    <a data-activates="slide-nav"  class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
      <i class="material-icons">menu</i>
    </a>
  </div>
  <ul id="slide-nav" class="side-nav fixed">
    <li class="logo">
      <div id="logo-container" class="brand-logo">
        <img :src="logo" alt="" height="100px">
        <div>前端资源仓库 v0.0.1</div>
      </div>
    </li>
    <li class="bold"  v-for="module in modules">
      <router-link class="waves-effect waves-teal" v-bind:to="module.id">{{module.name}}</router-link>
    </li>
  </ul>
  <div class="patreon-ad ">
    <a href="##" class="waves-effect waves-teal">加入我们吧！</a>
  </div>
</header>
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
