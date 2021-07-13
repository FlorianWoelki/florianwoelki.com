<template>
  <div
    class="container max-w-4xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-16 md:px-16"
  >
    <div class="text-sm font-semibold tracking-wide text-gray-400 uppercase">
      December 29, 2020
    </div>
    <h1
      class="mt-1 mb-6 text-3xl font-extrabold leading-tight text-black dark:text-gray-300"
    >
      {{ title }}
    </h1>
    <div class="markdown" v-html="compiledMarkdown" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import marked from 'marked';
/* eslint-disable-next-line */
// @ts-ignore
import youtubeStatsImage from '@/assets/2020/youtube_stats.png';
/* eslint-disable-next-line */
// @ts-ignore
import mdFile from '@/assets/2020/year2020.md';

export default defineComponent({
  setup() {
    const imageMap = {
      youtubeStats: youtubeStatsImage,
    } as Record<string, string>;

    const renderer = {
      link(href: string, title: string, text: string): string {
        return `<a href="${href}" target="_blank">${text}</a>`;
      },
      image(href: string, title: string, text: string): string {
        return `<img class="w-full mt-4" alt="${text}" src="${imageMap[href]}">`;
      },
    } as marked.Renderer;
    marked.use({ renderer });

    const title = '2020 Year Review';
    const input = mdFile;

    const compiledMarkdown = computed(() => marked(input));

    return {
      title,
      compiledMarkdown,
    };
  },
});
</script>

<style lang="postcss">
.markdown {
  @apply text-lg text-gray-700 dark:text-gray-400;
}
.markdown > * + * {
  @apply mt-6;
}
.markdown li > p + p,
.markdown li + li {
  @apply mt-4;
}
.markdown strong {
  @apply font-bold text-gray-800 dark:text-gray-400;
}
.markdown a {
  @apply font-semibold text-gray-800 underline dark:text-gray-400;
}
.markdown h1 {
  @apply text-2xl font-bold mb-2 mt-10 text-gray-800 dark:text-gray-400;
}
.markdown h2 {
  @apply text-xl font-bold mb-2 mt-10 text-gray-800 dark:text-gray-400;
}
.markdown h3 {
  @apply leading-5 text-lg font-bold text-gray-800 mt-8 -mb-2 dark:text-gray-400;
}
.markdown ul {
  @apply pl-10 list-disc;
}
.markdown ol {
  @apply pl-10 list-decimal;
}
</style>
