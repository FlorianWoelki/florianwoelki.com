<template>
  <h2 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
    {{ title }}
  </h2>
  <a
    :href="link"
    target="_blank"
    class="flex items-center justify-between -mt-1 text-gray-500"
  >
    {{ linkTitle }}
  </a>
  <p class="mt-2 leading-7 text-gray-500">
    <slot />
  </p>

  <div class="flex flex-wrap items-center mt-1">
    <Tag
      v-for="tag in tags"
      :key="tag"
    >
      {{ tag }}
    </Tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tag from './Tag.vue';

export default defineComponent({
  components: {
    Tag,
  },
  props: {
    title: String,
    linkTitle: String,
    link: String,
    tags: Array,
  },
});
</script>
