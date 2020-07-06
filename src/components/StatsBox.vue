<template>
  <div :class="showBorder ? 'br-2 bc-gray-400' : ''">
    <div class="text-center">
      <h1 class="mb-0">
        1000
      </h1>
      <p class="mt-0 mb-0">
        YouTube Abonnenten
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StatsBox extends Vue {
  @Prop({ type: Boolean, default: false })
  private showBorder!: boolean;
}
</script>
