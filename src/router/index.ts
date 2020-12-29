import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Year2020 from '../views/Year2020.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/2020',
    name: 'Year2020',
    component: Year2020,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
