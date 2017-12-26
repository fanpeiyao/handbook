import Vue from 'vue'
import VueRouter from 'vue-router'
const Framework = r => require.ensure([], () => r(require('./components/framework/framework')), 'Framework');
const Plugins = r => require.ensure([], () => r(require('./components/plugins/plugins')), 'Plugins');
const ppt = r => require.ensure([], () => r(require('./components/ppt/ppt')), 'ppt');
const About = r => require.ensure([], () => r(require('./components/About')), 'About');
const juicy = r => require.ensure([], () => r(require('./components/framework/md/juicy')), 'juicy');

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path:'/',component:Framework},
    {path: '/Framework', component: Framework},
    {path: '/Plugins', component: Plugins},
    {path: '/ppt', component: ppt},
    {path: '/About', component: About},
    {path: '/Framework/juicy', components: {
      detail:juicy
    }}

  ]
})
export default router



