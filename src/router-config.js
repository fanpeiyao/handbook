import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
/*
import Framework from './components/framework/framework'
import Plugins from './components/plugins/plugins'
import ppt from './components/ppt/ppt'
import About from './components/About'
*/
/*分模块打包,把我们想要组合在一起的组件打包到一个 chunk块中去
分模块打包需要下面这样使用 webpack的 require.ensure,并且在最后加入一个 chunk名,
相同 chunk名字的模块将会打包到一起*/
// const Home = r => require.ensure([], () => r(require('./components/home.vue')), 'home');
const Framework = r => require.ensure([], () => r(require('./components/framework/framework')), 'Framework');
const Plugins = r => require.ensure([], () => r(require('./components/plugins/plugins')), 'Plugins');
const ppt = r => require.ensure([], () => r(require('./components/ppt/ppt')), 'ppt');
const About = r => require.ensure([], () => r(require('./components/About')), 'About');






import juicy from './components/framework/md/juicy.vue'
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path:'/',component:Framework},
    {path: '/Framework', component: Framework},
      /*children: [
        { path: '/Framework/juicy', component: juicy }
      ]},*/
    {path: '/Plugins', component: Plugins},
    {path: '/ppt', component: ppt},
    {path: '/About', component: About},
    { path: '/Framework/juicy', component: juicy }

  ]
})
export default router



