<template>
  <div id="app" class="antialiased">
    <div class="px-8 py-4 shadow md:px-16">
      <ul class="space-x-6 text-gray-500">
        <li
          v-for="(item, index) in items"
          :key="item"
          class="inline-block"
          :class="index === activeItemIndex ? 'text-gray-900' : undefined"
        >
          <router-link
            :to="item.link"
            class="transition duration-300 ease-in-out hover:text-gray-800"
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
      });
    });

    return {
      activeItemIndex,
      items,
    };
  },
});
</script>
