<template>
  <div
    class="px-3 py-1 mt-1 mr-1 text-sm bg-gray-200 rounded-lg cursor-pointer"
    :class="{
      'bg-blue-300 text-blue-800': selected,
      'text-gray-600 dark:text-gray-900 dark:bg-gray-500': !selected,
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    selected: Boolean,
  },
});
</script>
