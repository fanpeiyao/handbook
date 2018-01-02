import Vue from 'vue'
import VueRouter from 'vue-router'
const Modules = r => require.ensure([], () => r(require('./components/modules')), 'Modules');
const SideBar = r => require.ensure([], () => r(require('./components/sidebar')), 'SideBar');
const Detail = r => require.ensure([], () => r(require('./components/detail')), 'Detail');
const About = r => require.ensure([], () => r(require('./components/about')), 'About');
Vue.use(VueRouter);





const router = new VueRouter({
  routes : [
     {
       path:'/',
       abstract:true,
       redirect: '/framework'
     },
    {
      path: '/:modules',
      components: {
        sidebar: SideBar,
        listView: Modules
      }
    },
    {
      path:'/about',
      components: {
        sidebar: SideBar,
        listView: Modules
      }
    },
    { path:'/:modules/:module',
      components:{
        detail:Detail
       },
    }
  ]
})
export default router



