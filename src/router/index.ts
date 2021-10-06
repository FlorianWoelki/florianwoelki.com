import { nextTick } from 'vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Blog from '../views/Blog.vue';
import Resume from '../views/Resume.vue';
import Year2020 from '../views/Year2020.vue';
import List100 from '../views/List100.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog - Florian Woelki',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Resume,
    meta: {
      title: 'Portfolio - Florian Woelki',
    },
  },
  {
    path: '/list100',
    name: 'List100',
    component: List100,
    meta: {
      title: 'List 100 - Florian Woelki',
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
  {
    path: '/dlr-slides',
    redirect: () => {
      window.location.href = 'https://florianwoelki-dlr-slides.vercel.app/';
      return '/redirecting';
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = (to.meta.title as string) || 'Florian Woelki';
  });
});

export default router;
