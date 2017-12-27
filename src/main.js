import Vue from 'vue'
import './../config'
import router from './router-config'
import './assets/css/index.css'
import App from './App.vue'

new Vue({
  mode:'history',
  router,
  render: h => h(App)
}).$mount('#app');


