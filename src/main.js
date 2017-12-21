import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
// const App = Vue.extend(require('./App.vue'))
import Hello from './components/hello.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
Vue.use(VueRouter);

const routes = [
  {path: '/Hello', component: Hello},
  {path: '/Home', component: Home},
  {path: '/About', component: About}
];

const router = new VueRouter({
  routes // （ES6缩写）相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

