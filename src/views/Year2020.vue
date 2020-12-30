<template>
  <div class="container max-w-4xl px-8 py-8 mx-auto break-words lg:py-16 md:px-16">
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

In this small post, I will close this year for myself.

## Highlights
* **Health —** I started intermittent fasting and got pretty shredded. In addition, I fell in love with home and bodyweight training.
* **Career —** I got a job as a Softwarearchitect at T-Systems International GmbH and so far I am pretty happy with it.
* **Education —** I've finished my Bachelor with a satisfactory grade and will continue learning in 2021.
* **Financial —** I started investing in stocks and learned a lot about smart and long-term investments.
* **Playing Piano —** I practiced a lot playing the piano. My favorite songs of 2020 were *Gnossienne No. 1 by Erik Satie*, *Dance Monkey by Tones and I* and *Moonlight Sonata by Beethoven*.
* **A lot of coding —** I spent almost everything coding on a project. Even if it is a simple readme file change.
* **Dope YouTube stats —** I don't really care about numbers, but I've reached over 100.000 views and 2000 subscribers this year.
* **Editing videos —** I've finally found my preferred way of editing videos after a lot of testing.
* **Livestreaming —** I engaged with the viewers in four total livestreams. This isn't a lot, but this will change in 2021.

## Personal

## Business

### Daycademy

### YouTube

## Looking ahead to 2021

The year was full of surprises and downfalls. All in all the year went pretty solid but I could improve on some things.

* More livestreaming
* Creating the company and releasing [Daycademy](https://daycademy.de/)
* 

Let's hope into 2021!`;

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
.markdown > * + * {
  @apply mt-6;
}
.markdown li > p + p, .markdown li + li {
  @apply mt-4;
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
