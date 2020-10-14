<template>
  <div class="px-2 py-1 mb-4 border-l-4 border-gray-800">
    <p class="text-lg font-semibold tracking-wide text-gray-800 uppercase">
      {{ title }}
    </p>
    <p class="text-gray-700">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Heading extends Vue {
  @Prop({ type: String, required: true })
  private title!: string;
}
</script>
