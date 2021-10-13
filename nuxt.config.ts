import { defineNuxtConfig } from 'nuxt3';
import vitePluginMd2Vue from 'vite-plugin-md2vue';

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [vitePluginMd2Vue()],
  },
});
