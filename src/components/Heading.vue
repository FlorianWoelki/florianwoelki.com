<template>
  <div class="px-4 py-1 mb-4 border-l-4 border-gray-800">
    <p class="text-lg font-semibold tracking-wide text-gray-800 uppercase">
      {{ title }}
    </p>
    <p class="text-gray-700">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
