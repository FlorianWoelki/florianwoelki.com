<template>
  <div v-show="filteredTags.length !== 0 || clickedFilter === ''">
    <h2 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
      {{ title }}
    </h2>
    <a
      :href="link"
      target="_blank"
      class="flex items-center justify-between -mt-1 text-gray-500 transition duration-300 ease-in-out hover:text-gray-600"
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Tag from './Tag.vue';

export default defineComponent({
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
    clickedFilter: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const filteredTags = computed(() => (props.tags as string[]).filter((tag: string) => tag.toLowerCase() === props.clickedFilter.toLowerCase()));
    return {
      filteredTags,
    };
  },
});
</script>
