<template>
  <div id="app">
    <!--<router-view></router-view>-->

    <app-header></app-header>
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
        <div class="row">
          <transition name="router-fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>

        </div>
      </div>
    </main>
    <app-footer></app-footer>




  </div>
</template>
<script>
  import AppHeader from './components/header.vue'
  import AppFooter from './components/footer.vue'
  export default {
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>
