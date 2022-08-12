import Vue from "vue";
import VueRouter from "vue-router";
import App from '../App.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: r => require.ensure([], () => r(require('../views/home')), 'home')
      },
      {
        path: 'item',
        component: r => require.ensure([], () => r(require('../views/item')), 'item')
      },
      {
        path: 'score',
        component: r => require.ensure([], () => r(require('../views/score')), 'score')
      },

    ]
  }

];

const router = new VueRouter({
  routes,
});

export default router;
