import { defineNuxtConfig } from 'nuxt3';
import md2vue from './vite/md2vue';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [md2vue()],
  },
});
