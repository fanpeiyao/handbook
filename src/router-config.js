import Hello from './components/hello.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

module.exports = {
  routes: function() {
    return routes = [{
      path: '/Hello',
      component: Hello
    }, {
      path: '/Home',
      component: Home
    }, {
      path: '/About',
      component: About
    }]
  }
}
/*
const routes = [
  {path: '/Hello', component: Hello},
  {path: '/Home', component: Home},
  {path: '/About', component: About}
];
*/
