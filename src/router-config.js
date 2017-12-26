import Vue from 'vue'
import VueRouter from 'vue-router'
const Modules = r => require.ensure([], () => r(require('./components/modules')), 'Modules');
const Children = r => require.ensure([], () => r(require('./components/children')), 'Children');
Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    {path:'/',component:Modules},
    {path: '/:modules', component: Modules,
      // props: {sideBar: false }
    },
    {path: '/:modules/:module', components: {
      detail:Children
    },
      // props: {sideBar: true }
    }
  ]
})
export default router



