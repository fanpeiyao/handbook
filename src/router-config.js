import Vue from 'vue'
import VueRouter from 'vue-router'
const Modules = r => require.ensure([], () => r(require('./components/modules')), 'Modules');
const SideBar = r => require.ensure([], () => r(require('./components/sidebar')), 'SideBar');
const Detail = r => require.ensure([], () => r(require('./components/detail')), 'Detail');
const About = r => require.ensure([], () => r(require('./components/about')), 'About');
Vue.use(VueRouter);

function getFirstKey(obj) {
  for(var k in obj)
      return k;
};
const router = new VueRouter({
  routes : [
     {
       path:'/',
       abstract:true,
       redirect: '/'+getFirstKey(config.modules)
     },
    {
      path:'/about',
      components: {
        sidebar: SideBar,
        listView: About
      }
    },
    {
      path: '/:modules',
      components: {
        sidebar: SideBar,
        listView: Modules
      }
    },
    {
      name: "detail",
      path:'/:modules/:module?',
      components:{
        listView:Detail
       },
    }
  ]
})
export default router



