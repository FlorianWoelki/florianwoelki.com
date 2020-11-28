<template>
  <div
    class="px-3 py-1 mt-1 mr-1 text-sm bg-gray-200 rounded-lg cursor-pointer"
    :class="{ 'bg-indigo-300 text-indigo-600': selected, 'text-gray-600': !selected }"
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
