import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Features from './views/Features.vue';

import Comprar from './views/Comprar.vue'
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/features',
        name: 'features',
        component: Features,
      },
      {
        path:'/Comprar',
        name:'comprar',
        component:Comprar,
      },
    ],
  });

router.beforeEach((to, from, next) => {
    next();
});

export default router;