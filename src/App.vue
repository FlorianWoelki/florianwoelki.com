<template>
  <div id="app" class="antialiased dark:bg-gray-900">
    <div
      class="flex justify-between px-8 py-4 shadow md:px-16 dark:bg-gray-700"
    >
      <ul class="space-x-6 text-gray-500 dark:text-gray-400">
        <li
          v-for="(item, index) in items"
          :key="item"
          class="inline-block"
          :class="
            index === activeItemIndex
              ? 'text-gray-900 dark:text-white'
              : undefined
          "
        >
          <router-link
            :to="item.link"
            class="transition duration-300 ease-in-out hover:text-gray-800 dark:hover:text-gray-100"
            @click="activeItemIndex = index"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const items = [
      { name: 'Portfolio', link: '/' },
      { name: '2020 Review', link: '/2020' },
      { name: 'List 100', link: '/list100' },
    ];

    const activeItemIndex = ref(0);

    onMounted(() => {
      router.isReady().then(() => {
        const activeRoute = items.filter((item) => item.link === route.path)[0];
        activeItemIndex.value = items.indexOf(activeRoute);

        // setup dark mode with the help of local storage
        if (
          localStorage.theme === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    });

    return {
      activeItemIndex,
      items,
    };
  },
});
</script>
