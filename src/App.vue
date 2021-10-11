<template>
  <div id="app" class="antialiased dark:bg-gray-900">
    <div class="px-16 py-4 border-b md:px-16 dark:border-gray-800">
      <div
        class="container pt-8 pb-10 mx-auto text-3xl text-gray-500 dark:text-gray-300"
      >
        <p>
          Hey!
          <span class="font-bold text-black dark:text-white">
            I'm Florian Woelki
          </span>
        </p>
        <p>T-Shaped Fullstack Softwareengineer</p>
        <p class="text-lg text-gray-400">
          with special interest in Go, TypeScript, and data (blockchain and ai)
        </p>
      </div>

      <div class="container flex justify-between mx-auto">
        <ul
          class="space-x-6 tracking-wider text-gray-500 uppercase dark:text-gray-400"
        >
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

        <div
          v-if="!isLightmode"
          class="text-gray-500 cursor-pointer"
          @click="toggleThemeMode"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </div>
        <div
          v-else
          class="text-gray-300 cursor-pointer"
          @click="toggleThemeMode"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </div>
      </div>
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
    const isLightmode = ref<boolean>(false);

    const items = [
      { name: 'Blog', link: '/' },
      { name: 'Portfolio', link: '/portfolio' },
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

        isLightmode.value = !document.documentElement.classList.contains(
          'dark',
        );
      });
    });

    const toggleThemeMode = (): void => {
      if (!isLightmode.value) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        isLightmode.value = true;
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        isLightmode.value = false;
      }
    };

    return {
      activeItemIndex,
      items,
      isLightmode,
      toggleThemeMode,
    };
  },
});
</script>
