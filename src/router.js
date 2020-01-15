import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Pruebas.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
    ],
  });

router.beforeEach((to, from, next) => {
    next();
});

export default router;