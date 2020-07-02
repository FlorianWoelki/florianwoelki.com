import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import BucketList from '../views/BucketList.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bucketlist',
    name: 'Bucketlist',
    component: BucketList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
