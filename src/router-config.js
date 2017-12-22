import Vue from 'vue'
import VueRouter from 'vue-router'
import Framework from './components/framework/framework'
import Plugins from './components/plugins/plugins'
import ppt from './components/ppt/ppt'
import About from './components/About'
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path:'/',component: Framework},
    {path: '/Framework', component: Framework},
    {path: '/Plugins', component: Plugins},
    {path: '/ppt', component: ppt},
    {path: '/About', component: About}
  ]
})
export default router



