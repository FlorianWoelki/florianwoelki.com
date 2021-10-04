<template>
  <div ref="pdfContent" class="z-0 h-full">
    <div class="h-screen lg:grid lg:grid-cols-2">
      <div class="container px-16 py-16 mx-auto break-words">
        <div class="max-w-2xl ml-auto space-y-12">
          <!-- HEADER -->
          <div class="xl:flex xl:items-center xl:justify-between">
            <div class="space-y-4 text-gray-400 dark:text-gray-500">
              <div class="flex items-center space-x-2">
                <div>
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- eslint-disable-next-line -->
                    <path
                      d="M12 0.297001C5.37 0.297001 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297001 12 0.297001"
                    />
                  </svg>
                </div>
                <a
                  href="https://github.com/FlorianWoelki"
                  target="_blank"
                  class="transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400"
                >
                  /FlorianWoelki
                </a>
              </div>
              <div class="flex items-center space-x-2">
                <div>
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <!-- eslint-disable-next-line -->
                    <path
                      d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/florian-woelki/"
                  target="_blank"
                  class="transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400"
                >
                  /FlorianWoelki
                </a>
              </div>
              <div class="flex items-center space-x-1">
                <div>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:florianwoelki@gmx.de"
                  target="_blank"
                  class="transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400"
                >
                  FlorianWoelki@gmx.de
                </a>
              </div>
            </div>

            <div class="mt-8 space-y-2 xl:text-center xl:mt-0">
              <p class="text-gray-400">Download resumé</p>
              <div class="flex items-center space-x-2 xl:justify-between">
                <a
                  href="https://github.com/FlorianWoelki/portfolio/raw/master/pdf/main.pdf"
                  target="_blank"
                  class="resume-btn"
                >
                  PDF
                </a>
                <a href="#" class="resume-btn">
                  Text
                </a>
              </div>
            </div>
          </div>

          <!-- ABOUT -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase"
            >
              About
            </h3>
            <h4 class="-mt-1 text-gray-500 uppercase dark:text-gray-300">
              Fullstack Engineer
            </h4>
            <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              I am a passionate T-Shaped fullstack Softwaredeveloper who is in
              love with building complex architectures and software. I like to
              be in uncomfortable situations and I am trying to learn every day
              something new from others or on my own.
            </p>
          </div>

          <!-- SKILLS -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
            >
              Skills
            </h3>
            <h4 class="-mt-1 text-gray-500 uppercase dark:text-gray-400">
              Languages
            </h4>
            <div class="flex flex-wrap items-center mt-1">
              <Tag
                v-for="(language, index) in languages"
                :key="index"
                @click="setClickedFilter(language)"
                :selected="clickedFilter === language"
              >
                <span
                  :class="{ 'animate-pulse': index === 0 && !hasClickedFilter }"
                >
                  {{ language }}
                </span>
              </Tag>
            </div>
            <h4 class="mt-8 text-gray-500 uppercase dark:text-gray-400">
              Frameworks / Technologies
            </h4>
            <div class="flex flex-wrap items-center mt-1">
              <Tag
                v-for="(technology, index) in technologies"
                :key="index"
                @click="setClickedFilter(technology)"
                :selected="clickedFilter === technology"
              >
                {{ technology }}
              </Tag>
            </div>
          </div>

          <!-- EDUCATION -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
            >
              Education
            </h3>
            <h4
              class="items-center justify-between text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              <span>
                Udacity: Data Engineering
                <a
                  target="_blank"
                  href="https://github.com/FlorianWoelki/portfolio/blob/master/src/assets/certificates/data-engineering.pdf"
                  class="italic normal-case"
                >
                  Certificate
                </a>
              </span>
              <div class="font-normal text-gray-400">2021 - 2021</div>
            </h4>
            <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              Design data models, build data warehouses and data lakes, automate
              data pipelines, and work with massive datasets. At the end of this
              program, I've built a capstone project that includes all of these
              skills.
            </p>

            <h4
              class="items-center justify-between mt-8 text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              <span>
                Udacity: AI Programming with Python
                <a
                  target="_blank"
                  href="https://github.com/FlorianWoelki/portfolio/blob/master/src/assets/certificates/ai-programming-with-python.pdf"
                  class="italic normal-case"
                >
                  Certificate
                </a>
              </span>
              <div class="font-normal text-gray-400">2021 - 2021</div>
            </h4>
            <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              Discovering the world of AI with the help of data and Python.
              Learned Python, NumPy, PyTorch, math (calculus and linear
              algebra), and the key techniques of neural networks (gradient
              descent and backpropagation).
            </p>

            <h4
              class="items-center justify-between mt-8 text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              <span>
                Udacity: Intro to self-driving cars
                <a
                  target="_blank"
                  href="https://github.com/FlorianWoelki/portfolio/blob/master/src/assets/certificates/intro-self-driving-cars.pdf"
                  class="italic normal-case"
                >
                  Certificate
                </a>
              </span>
              <div class="font-normal text-gray-400">2021 - 2021</div>
            </h4>
            <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              Discovering the fundamentals of self-driving cars. Sharpen Python
              skills, apply C++, apply matrices, probability and calculus in
              code, and touch on computer vision and machine learning. The
              essentials of self-driving cars.
            </p>

            <h4
              class="items-center justify-between mt-8 text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              HfTL DUAL B.S. Computer Science
              <div class="font-normal text-gray-400">2017 - 2020</div>
            </h4>
            <p class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              Bachelorthesis:
              <span class="italic">
                Bluetooth Low Energy Proximity: A comparison between different
                machine learning algorithms with a variable object configuration
                in indoor areas.
              </span>
            </p>
          </div>

          <!-- WORK EXPERIENCE -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
            >
              Work Experience
            </h3>
            <h4
              class="items-center justify-between text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              <div>T-Systems International</div>
              <div class="font-normal text-gray-400">2017 - Present</div>
            </h4>
            <h4 class="mt-2 italic text-gray-500 uppercase dark:text-gray-400">
              Fullstack Softwarearchitect
            </h4>

            <div class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              <ul class="ml-4 leading-7 list-disc">
                <li>
                  Full-stack development on situational awareness dashboards
                  using Angular/Vue, Spring and Scala/Java
                </li>
                <li>
                  Implemented RESTful API with SpringBoot secured with JWT
                  authentication
                </li>
                <li>
                  Full-stack development on a real time indoor tracking service
                  including UWB, LTE and BLE using Angular and Java with
                  SpringBoot
                </li>
                <li>
                  Android app development with Kotlin for pairing a BLE beacon
                  with a specific QR-Code
                </li>
                <li>
                  Designing a micro frontend architecture with the help of
                  Vue.js and Web Components
                </li>
                <li class="italic">TBD</li>
              </ul>
            </div>

            <h4
              class="items-center justify-between mt-8 text-gray-500 uppercase md:flex dark:text-gray-400"
            >
              <div>Company Consulting Team</div>
              <div class="font-normal text-gray-400">2019 - 2021</div>
            </h4>
            <h4 class="mt-2 italic text-gray-500 uppercase dark:text-gray-400">
              IT Consultant
            </h4>

            <div class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              <ul class="ml-4 leading-7 list-disc">
                <li>
                  Front-end inhouse work for a fully functional HR-Tool with Vue
                  and TypeScript
                </li>
                <li>
                  Full-stack inhouse work for fully functional end to end
                  polling tool written in Vue, TypeScript and Node.js
                </li>
                <li>
                  Front-end project for a customer by developing a contact form
                  for a real estate company
                </li>
                <li>
                  Data Science project for a customer by merging and analyzing
                  different data sources in Python
                </li>
              </ul>
            </div>
          </div>

          <!-- Hackathons -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
            >
              Hackathons
            </h3>
            <div v-for="(hackathon, index) in hackathons" :key="index">
              <h4
                class="items-center justify-between -mt-1 text-gray-500 uppercase md:flex dark:text-gray-400"
              >
                <div>
                  {{ hackathon.name }}
                  <i class="normal-case">
                    <a :href="hackathon.certificate" target="_blank">
                      Certificate
                    </a>
                  </i>
                </div>
                <div class="font-normal text-gray-400">
                  {{ hackathon.from }} - {{ hackathon.to }}
                </div>
              </h4>
              <div class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
                <ul class="ml-4 leading-7 list-disc">
                  <li
                    v-for="(description,
                    descriptionIndex) in hackathon.descriptions"
                    :key="descriptionIndex"
                  >
                    {{ description }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Talks -->
          <div>
            <h3
              class="text-2xl font-semibold tracking-wide text-gray-800 uppercase dark:text-gray-300"
            >
              Talks
            </h3>

            <div class="mt-2 leading-7 text-gray-500 dark:text-gray-400">
              <ul class="ml-4 leading-7 list-disc">
                <li v-for="(talk, index) in talks" :key="index">
                  <a
                    class="underline hover:text-gray-400"
                    :href="talk.link"
                    target="_blank"
                  >
                    {{ talk.name }}
                    <span class="text-sm">({{ talk.date }})</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- PERSONAL PROJECTS -->
      <div>
        <div
          class="container px-16 pt-16 mx-auto break-words"
          :class="filteredProjects.length === 0 ? 'pb-0' : 'pb-16'"
        >
          <div class="max-w-2xl mr-auto space-y-12">
            <h1
              class="text-4xl font-light text-gray-800 uppercase lg:text-5xl dark:text-gray-300"
            >
              Personal
              <span class="block text-5xl font-bold lg:text-6xl">Projects</span>
            </h1>

            <div class="space-y-12">
              <Project
                v-for="(project, index) in filteredProjects"
                :key="index"
                :title="project.title"
                :link="project.link"
                :link-title="project.linkTitle"
                :tags="project.tags"
                @click-tag="setClickedFilter($event)"
                :selected-tag="clickedFilter"
              >
                {{ project.description }}
              </Project>
            </div>
          </div>
        </div>
        <div v-if="filteredProjects.length === 0">
          <LottieAnimation path="animations/error.json" />
          <h5
            class="p-4 pb-16 mx-8 text-3xl leading-7 text-center text-gray-300 border-t dark:text-gray-600"
          >
            No projects found :(
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';
import Tag from '@/components/Tag.vue';
import Project from '@/components/Project.vue';
import projects from '@/projects';
import talks from '@/assets/talks.json';
import hackathons from '@/assets/hackathons.json';
import ProjectTag from '../models/ProjectTag';

export default defineComponent({
  components: {
    Tag,
    Project,
    LottieAnimation,
  },
  setup() {
    const hasClickedFilter = ref(false);

    const clickedFilter = ref('');
    const languages = ref([
      ProjectTag.JavaScript,
      ProjectTag.TypeScript,
      ProjectTag.Go,
      ProjectTag.Python,
      ProjectTag.Java,
      ProjectTag.Swift,
      ProjectTag.SQL,
      ProjectTag.Solidity,
    ]);
    const technologies = ref([
      ProjectTag.Vue,
      ProjectTag.Nuxt,
      ProjectTag.GraphQL,
      ProjectTag.GRPC,
      ProjectTag.Tailwind,
      ProjectTag.Redis,
      ProjectTag.PostgreSQL,
      ProjectTag.Angular,
      ProjectTag.JQuery,
      ProjectTag.Nginx,
      ProjectTag.Kafka,
      ProjectTag.Git,
      ProjectTag.React,
      ProjectTag.Node,
      ProjectTag.Docker,
      ProjectTag.Jenkins,
      ProjectTag.SpringBoot,
      ProjectTag.MySQL,
      ProjectTag.MongoDB,
      ProjectTag.Electron,
      ProjectTag.Firebase,
      ProjectTag.Tensorflow,
      ProjectTag.Scikitlearn,
      ProjectTag.Jupyter,
      ProjectTag.PythonLibs,
      ProjectTag.Vim,
      ProjectTag.Blockchain,
    ]);

    const setClickedFilter = (criterium: string): void => {
      if (!hasClickedFilter.value) {
        hasClickedFilter.value = true;
      }

      if (clickedFilter.value === criterium) {
        clickedFilter.value = '';
      } else {
        clickedFilter.value = criterium;
      }
    };

    const filteredProjects = computed(() => {
      if (!clickedFilter.value) {
        return projects;
      }
      return projects.filter((project) =>
        project.tags.includes(clickedFilter.value as ProjectTag),
      );
    });

    const pdfContent = ref<HTMLElement | null>(null);

    return {
      pdfContent,
      hackathons,
      talks,
      clickedFilter,
      languages,
      technologies,
      setClickedFilter,
      projects,
      filteredProjects,
      hasClickedFilter,
    };
  },
});
</script>

<style lang="postcss">
.resume-btn {
  @apply px-6 py-2 font-medium leading-7 text-gray-400 transition duration-300 ease-in-out bg-transparent bg-gray-200 border border-gray-300 rounded-md focus:outline-none hover:bg-gray-300 hover:text-white dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700;
}
</style>
