import Vue from 'vue'
import VueRouter from 'vue-router'
const Modules = r => require.ensure([], () => r(require('./components/modules')), 'Modules');
const Children = r => require.ensure([], () => r(require('./components/children')), 'Children');
const About = r => require.ensure([], () => r(require('./components/about')), 'About');
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path:'/',component:Modules},
    {path:'/About',component: About},
    {path:'/:modules',component: Modules},
    {path:'/:modules/:module',components:{detail:Children},
    }
  ]
})
export default router



