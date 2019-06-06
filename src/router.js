import Vue from 'vue';
import Router from 'vue-router';
import Header from './views/Header.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: Header,
    },
  ],
});
