<template>
  <div
    class="container max-w-4xl px-8 pt-8 pb-32 mx-auto break-words lg:pt-16 md:px-16"
  >
    <markdown-file class="markdown" />
  </div>
</template>

<script lang="ts">
import MarkdownFile from '@/content/test.md';

export default defineComponent({
  components: {
    MarkdownFile,
  },
});
</script>

<style lang="postcss">
.markdown {
  @apply text-lg text-gray-700;
}
.markdown > * + * {
  @apply mt-6;
}
.markdown li > p + p,
.markdown li + li {
  @apply mt-4;
}
.markdown strong {
  @apply font-bold text-gray-800;
}
.markdown a {
  @apply font-semibold text-gray-800 underline;
}
.markdown h1 {
  @apply text-2xl font-bold mb-2 mt-10 text-gray-800;
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
.markdown ol {
  @apply pl-10 list-decimal;
}
</style>
