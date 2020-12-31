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
      link(href: string, title: string, text: string): string {
        return `<a href="${href}" target="_blank">${text}</a>`;
      },
      image(href: string, title: string, text: string): string {
        return `<img class="w-full mt-4" alt="${text}" src="${imageMap[href]}">`;
      },
    } as marked.Renderer;
    marked.use({ renderer });

    const title = '2020 Year Review';
    const input = `This year 2020 was full of surprises and ups and downs. I felt this year like a surfer, always on the next wave.
I was really excited to hop into the year 2020, but somehow things didn't go well or go really well.

In this small post, I will close this year for myself.

## Highlights
* **Health and Fitness —** I started intermittent fasting and got pretty shredded. In addition, I fell in love with home and bodyweight training.
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

In addition to my fitness that totally improved this year, I learned a lot about diet, our body and how food effects the brain. I've
read some books about food and their nutrient. I really did not think that it would interest me, but I am more interest in brain health
and health in general then ever before.

### Education
This year I've finished my Bachelor Degree in Computer Science. Honestly, I've learned more at work than in university. Therefore,
I will ask myself in the next year, if a Masters Degree in Computer Science is really useful. I might ask myself, if it is fullfilling
and if it does make sense. Or is it more useful to earn a lot of experience at work and earn certificates about specific technologies.
Furthermore, I've learned a lot about the math behind Machine and Deep Learning. In the upcoming year I will try to do a follup up with
the math of Machine Learning, which reflects my interests as well. Maybe there is some combination about Health/Nutrition and Machine Learning.

Besides the degree, I learned some new frameworks and languages like Golang. You can build amazing microservices with Golang and the
language specific frameworks like Gorilla or gRPC. In this year I started a new project where I rebuild Instagram with a Golang microservices
backend and a simple Vue.js frontend. I will try to finish this project this year.

In addition, I've read some books, but not a lot. I will try to change this the coming year. Also I tried to read Sci-fi books which
are really interesting because you might learn new things and strengthen your creativity about the future. Everything is possible.

Furthermore, I learned a lot about playing piano. This skill has nothing to do with programming or software development and is therefore
a really nice hobby I would like to do more often.

### Personal Plans for 2021
Here is a small list of my personal plans for the upcoming year:
* Reading 12 books in 12 months
* Finishing all unfinished projects on GitHub
* Contribute to at least five open source projects
* Read more scientific papers about Health and Machine Learning
* Regular journaling about work stuff

## Business
There were a lot of changes in this year, because I actually got my first fulltime job as a Softwarearchitect.
Furthermore, I came up with a lot of business oppurtunities I will try to tackle this year. I had a lot of ideas which I will try to
create this year.

### Career
Right now I am a simple Softwarearchitect at T-Systems International GmbH. But besides that I try to build things in my freetime
and educate the world about the future and programming.

I have some plans for the year 2021 like starting a podcast or writing more often. I will try to handle all of that in the upcoming
year. So it could be fun ;)

#### Daycademy
This year was a *redesign and create* year for Daycademy. I came up with the ideas this year and I made a lot of good progress.
Right now, the academy is kind of in a release stadium and I am working towards it in the upcoming year. However, there were some
fundamental changes about the design and the development. I redesigned the academy and the landing page from scratch and now I am pretty
happy with the result.

Furthermore, there were a lot of technical challenges for me. For instance, the idea of having a sandbox environment for executing code
in the browser was tough. I had to create a lot of bash scripts and think about a clever solution. Same thing for the backend. The challenge
in the backend was to actually create a efficient and scalable infrastructure. Right now, I am not happy with it, but I will try to work it out
in 2021.

#### YouTube
2020 was a really good year in terms of numbers of my YouTube channel. I really couldn't believe that I would ever have 1000 subscribers
on a YouTube channel. This was a magic number for me and I am really proud of it because I created educational videos constantly. In addition,
I've found my style of editing videos, which was a tough process of trial and error. Below you can see this year YouTube stats.
![alt text](youtubeStats)

In 2021 I will try to create more and better videos. I will level up my editing skills.

The three most popular videos of 2020 were:

1. [First Vue.js course video](https://www.youtube.com/watch?v=Z2bvEpQvYh4) *(18.998 views)*
2. [Second Vue.js course video](https://www.youtube.com/watch?v=Zm5tliqRMZk) *(8.078 views)*
3. [What is variance and standard deviation](https://www.youtube.com/watch?v=6x1VJAHMNYg) *(7.006 views)*

So far, I am pretty happy how the YouTube channel evolves and I am seeing this as a hobby.

### Financial

### Business Plans for 2021
Here is a small list of my business related plans for the upcoming year:
* Try to livestream once a month on YouTube.
* Creating the company and releasing Daycademy.
* Releasing minimum of three top tier free courses on YouTube and Daycademy.
* Creating more content for simple advertising of Daycademy on social media platforms
* Starting a podcast and write more often
* Finish up the AI video course with videos about neural networks

Let's jump into the cold water of 2021!`;

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
.markdown h4 {
  @apply leading-5 text-base font-bold text-gray-800 mt-8 -mb-2;
}
.markdown ul {
  @apply pl-10 list-disc;
}
.markdown ol {
  @apply pl-10 list-decimal;
}
</style>
