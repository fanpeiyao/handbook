<template>
  <div id="app">
    <!--侧栏-->
    <header>
      <div class="container">
        <a href="##" data-activates="slide-nav" class="button-collapse top-nav waves-effect waves-light circle hide-on-large-only">
          <i class="material-icons">menu</i>
        </a>
      </div>
      <ul id="slide-nav" class="side-nav fixed">
        <li class="logo">
          <div id="logo-container" class="brand-logo">
            <img src="./assets/img/logo.png" alt="" height="100px">
            <div>前端资源仓库 v0.0.1</div>
          </div>
        </li>
        <li class="bold"  v-for="module in modules">
          <router-link class="waves-effect waves-teal" v-bind:to="module.to">{{module.name}}</router-link>
        </li>
      </ul>
      <div class="patreon-ad ">
        <a href="##" class="waves-effect waves-teal">加入我们吧！</a>
      </div>
    </header>
    <!--中心块-->
    <main>
      <div class="section no-pad-bot">
        <!--小、中屏标题栏-->
        <div class="like-tab">
          <div class="container center white-text">
            WELCOME
          </div>
        </div>
      </div>
      <!--内容列表-->
      <div class="content">
        <div class="row " >
          <router-view></router-view>
        </div>
      </div>
    </main>

    <footer class="page-footer" style="padding: 0">
      <div class="footer-copyright">
        <div class="container">
          © 2017 交互设计线
        </div>
      </div>
    </footer>


  </div>
</template>
<script>
  export default {
    data () {
      return config
    }
  }
</script>
