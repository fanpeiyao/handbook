import Vue from 'vue'
import router from './router-config'
import App from './App.vue'

new Vue({
  mode:'history',
  router,
  render: h => h(App)
}).$mount('#app');


