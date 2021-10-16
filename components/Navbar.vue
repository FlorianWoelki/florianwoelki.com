<template>
  <div
    class="fixed flex items-center justify-between w-full px-8 py-4 bg-gray-900"
  >
    <ul class="flex space-x-6">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="transition duration-100 ease-in-out hover:text-gray-400"
        :class="{
          'text-white': $route.path === item.link,
          'text-gray-300': $route.path !== item.link,
        }"
      >
        <nuxt-link :to="item.link.toLowerCase()" class="block">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <ul class="flex space-x-6">
      <li class="text-gray-300 hover:text-gray-400">
        <a href="#" target="_blank" class="block">
          <github-icon></github-icon>
        </a>
      </li>
      <li class="text-gray-300 hover:text-gray-400">
        <a href="#" target="_blank" class="block">
          <linkedin-icon></linkedin-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import GithubIcon from '@/assets/icons/github.svg?component';
import LinkedinIcon from '@/assets/icons/linkedin.svg?component';

interface NavbarItem {
  title: string;
  link: string;
}

const items: NavbarItem[] = [
  { title: 'Blog', link: '/' },
  { title: 'Resume', link: '/resume' },
  { title: 'Contact', link: '/contact' },
  { title: 'Projects', link: '/projects' },
];
</script>
