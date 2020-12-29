<template>
  <div class="container max-w-4xl px-8 py-16 mx-auto break-words md:px-16">
    <div class="text-sm font-semibold tracking-wide text-gray-400 uppercase">
      December 29, 2020
    </div>
    <h1 class="mt-1 mb-6 text-3xl font-extrabold leading-tight text-black">
      {{ title }}
    </h1>
    <div
      class="markdown"
      v-html="compiledMarkdown"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import marked from 'marked';

export default defineComponent({
  setup() {
    const title = '2020 Year Review';
    const input = `This year 2020 was full of surprises and ups and downs. I felt this year like a surfer, always on the next wave.
I was really excited to hop into the year 2020, but somehow things didn't go well or go really well.

In this small post I will close this year for myself.

## Highlights
* Something
* Hello`;

    const compiledMarkdown = computed(() => marked(input));

    return {
      title,
      compiledMarkdown,
    };
  },
});
</script>

<style>
.markdown {
  @apply text-lg text-gray-700;
}
.markdown > * + *, .markdown li > p + p, .markdown li + li {
  @apply mt-6;
}
.markdown strong {
  @apply font-bold text-gray-800;
}
.markdown a {
  @apply font-semibold text-gray-800;
}
.markdown h2 {
  @apply text-xl font-bold mb-2 mt-10 text-gray-800;
}
.markdown h3 {
  @apply leading-5 text-lg font-bold text-gray-800 mt-8 -mb-2;
}
.markdown ul {
  @apply pl-10 list-disc;
}
</style>
