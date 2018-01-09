<template>
  <div id="app">
    <!--列表页-->
      <!--<transition name="router-fade" mode="out-in">-->
        <keep-alive>
          <router-view class="view sidebar" name="sidebar"></router-view>
        </keep-alive>
      <!--</transition>-->
      <main :style="{marginLeft: $route.params.showDetail ? '0' : '300px'}">
        <app-header></app-header>
        <!--内容列表-->
        <!--<transition name="router-fade" mode="out-in">-->
          <keep-alive>
            <router-view class="view list" name="listView"></router-view>
          </keep-alive>
        <!--</transition>-->
      </main>
      <app-footer :style="{marginLeft: $route.params.showDetail ? '0' : '300px'}"></app-footer>
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
