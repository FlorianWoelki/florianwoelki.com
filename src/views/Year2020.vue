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
/* eslint-disable-next-line */
// @ts-ignore
import youtubeStatsImage from '@/assets/2020/youtube_stats.png';

export default defineComponent({
  setup() {
    const imageMap = {
      youtubeStats: youtubeStatsImage,
    } as Record<string, string>;

    const renderer = {
      image(href: string, title: string, text: string): string {
        return `<img class="w-full" alt="${text}" src="${imageMap[href]}">`;
      },
    } as marked.Renderer;
    marked.use({ renderer });

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
2020 was a pretty testing like year where I tried to test a lot of things and experience new things.
Honestly, I am not satisfied enough with the experiences had this year. But I will try to change this next year
by building new things or simply trying new things.

### Health and Fitness
Even if this year was a *i will stay inside* year I've used my body and my brain to experiment with a diet and with
home training. I personally really enjoy lifting weights at home because you can adjust your training dynamically. For instance,
you can focus on do on the one day a really intense workout and on the other day a more like fast workout with lighter weights but
more reps. In the gym, it is really hard to do this. Therefore I cancelled my membership at the gym.

## Career
Right now I am a simple Softwarearchitect at T-Systems International GmbH. But besides that I try to build things in my freetime
and educate the world about the future and programming.

I have some plans for the year 2021 like starting a podcast or writing more often. I will try to handle all of that in the upcoming
year. So it could be fun ;)

### Daycademy

### YouTube
![alt text](youtubeStats)

## Education
This year I've finished my Bachelor Degree in Computer Science. Honestly, I've learned more at work than in university. Therefore,
I will ask myself in the next year, if a Masters Degree in Computer Science is really useful. I might ask myself, if it is fullfilling
and if it does make sense. Or is it more useful to earn a lot of experience at work and earn certificates about specific technologies.

Besides the degree, I learned some new frameworks and languages like Golang. You can build amazing microservices with Golang and the
language specific frameworks like Gorilla or gRPC. In this year I started a new project where I rebuild Instagram with a Golang microservices
backend and a simple Vue.js frontend. I will try to finish this project this year.

In addition, I've read some books, but not a lot. I will try to change this the coming year. Also I tried to read Sci-fi books which
are really interesting because you might learn new things and strengthen your creativity about the future. Everything is possible.

Furthermore, I learned a lot about playing piano. This skill has nothing to do with programming or software development and is therefore
a really nice hobby I would like to do more often.

## Looking ahead to 2021
The year was full of surprises and downfalls. All in all the year went pretty solid but I could improve on some things.

I will try to achieve these things in the next year:
* Try to livestream once a month on YouTube.
* Creating the company and releasing Daycademy.
* Releasing minimum of three top tier free courses on YouTube and Daycademy.
* Creating more content for simple advertising of Daycademy on social media platforms
* Starting a podcast and write more often
* Reading 12 books in 12 months
* Finishing all unfinished projects on GitHub
* Contribute to at least five open source projects

Let's jump into 2021!`;

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
  @apply font-semibold text-gray-800 underline;
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
