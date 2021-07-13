<template>
  <div>
    <h2
      class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
    >
      {{ title }}
    </h2>
    <a
      :href="link"
      target="_blank"
      class="flex items-center justify-between -mt-1 text-gray-500 break-all transition duration-300 ease-in-out hover:text-gray-600"
    >
      {{ linkTitle }}
    </a>
    <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
      <slot />
    </p>

    <div class="flex flex-wrap items-center mt-1">
      <Tag
        v-for="tag in tags"
        :key="tag"
        :selected="selectedTag === tag"
        @click="$emit('click-tag', tag)"
      >
        {{ tag }}
      </Tag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tag from './Tag.vue';

export default defineComponent({
  emits: ['click-tag'],
  components: {
    Tag,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    linkTitle: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    selectedTag: {
      type: String,
      default: '',
    },
  },
});
</script>
