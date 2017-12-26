<template>
  <div id="app">
    <!--展示详情页-->
    <transition name="router-slid" mode="out-in" v-if="$route.query.showDetail">
      <keep-alive>
        <router-view name="detail"></router-view>
      </keep-alive>
    </transition>

    <!--v-if="!showDetail"-->
    <!--列表页-->
    <div class="father" v-else>
      <app-header ></app-header>
      <!--中心块-->
      <main>
        <div class="section no-pad-bot" >
          <!--小、中屏标题栏-->
          <div class="like-tab">
            <div class="container center white-text">
              WELCOME
            </div>
          </div>
        </div>
        <!--内容列表-->
        <div class="content">
            <transition name="router-fade" mode="out-in">
              <keep-alive>
                <router-view ></router-view>
              </keep-alive>
            </transition>
        </div>
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
    },
    data(){
      return {
        showDetail:this.$route.query.showDetail || false
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.query.showDetail)
      }
    }
  }
</script>
