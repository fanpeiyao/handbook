<template>
  <div id="app">

    <!--列表页-->
    <div class="father">
      <router-view class="view sidebar" name="sidebar"></router-view>

      <main>
        <app-header></app-header>

        <!--内容列表-->
        <router-view class="view list" name="listView"></router-view>

        <!--展示详情页-->
        <router-view class="view two" name="detail"></router-view>

      </main>
      <app-footer></app-footer>
    </div>
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
