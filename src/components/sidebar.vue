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
          <img :src="back.logo" alt="" height="100px">
          <div>{{back.msg}}&nbsp;{{back.version}}</div>
        </div>
      </li>
      <li class="bold"  v-for="module in modules">
        <router-link class="waves-effect waves-teal" :to="module.id">{{module.name}}</router-link>
      </li>
      <li class="bold">
        <router-link class="waves-effect waves-teal"  to="/about">About</router-link>
      </li>
    </ul>
    <div class="patreon-ad ">
      <a :href="back.backHref" class="waves-effect waves-teal">
        <img :src="back.icon" alt="">
        {{back.backTxt}}</a>
    </div>
  </header>
</template>
<script>
  export default {
    data () {
      return {
        modules:config.modules,
        back:config.about
      }
    }
  }
  $(function () {
    $('.top-nav').sideNav();
  })
</script>
