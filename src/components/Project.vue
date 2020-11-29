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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: String,
    linkTitle: String,
    link: String,
  },
});
</script>
