import { nextTick } from 'vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Year2020 from '../views/Year2020.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Resumé - Florian Woelki',
    },
  },
  {
    path: '/2020',
    name: 'Year2020',
    component: Year2020,
    meta: {
      title: '2020 Year Review - Florian Woelki',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || 'Florian Woelki';
  });
});

export default router;
