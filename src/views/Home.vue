<template>
  <div class="h-full pb-32 bg-gray-100">
    <div class="py-32 bg-gray-800">
      <div class="container px-16 mx-auto">
        <div class="flex flex-col flex-wrap md:flex-row lg:items-center">
          <div class="text-center md:w-4/6 sm:text-left sm:pr-8">
            <h1 class="mb-2 text-3xl font-semibold leading-none tracking-wider text-white uppercase md:text-4xl lg:text-5xl">
              Florian Woelki
            </h1>
            <h2 class="text-lg tracking-wide text-gray-500 uppercase md:text-2xl">
              Undergraduate Computer Science Major
            </h2>
          </div>
          <div class="mt-4 md:w-2/6 sm:mt-0">
            <ul class="space-y-1 text-lg text-gray-400 md:space-y-4">
              <li class="flex items-center justify-center space-x-2 sm:justify-start">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <a
                  href="mailto:florianwoelki@gmx.de"
                  class="transition duration-300 ease-in-out hover:text-gray-500"
                >
                  <span>florianwoelki@gmx.de</span>
                </a>
              </li>
              <li class="flex items-center justify-center space-x-2 sm:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <!-- eslint-disable-next-line -->
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <a
                  href="https://github.com/FlorianWoelki"
                  class="transition duration-300 ease-in-out hover:text-gray-500"
                >
                  <span>FlorianWoelki</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 bg-gradient-to-r from-indigo-400 to-blue-500">
      <div class="container px-16 mx-auto ">
        <h3 class="text-2xl text-center text-white">
          Download my resumé in other formats.
        </h3>

        <div class="flex items-center justify-center mt-4 space-x-2">
          <button
            type="button"
            class="px-8 py-2 font-medium leading-7 text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-md focus:outline-none hover:bg-white hover:text-gray-900"
          >
            PDF
          </button>
          <button
            type="button"
            class="px-8 py-2 font-medium leading-7 text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-md focus:outline-none hover:bg-white hover:text-gray-900"
          >
            Text
          </button>
        </div>
      </div>
    </div>

    <div class="container px-16 mx-auto mt-16 break-words md:grid md:grid-cols-2 md:gap-12">
      <div>
        <Title>
          About
        </Title>

        <div class="md:ml-4">
          <Heading title="Florian Woelki">
            Fullstack Softwareengineer
          </Heading>
          <p class="leading-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit cumque reprehenderit doloribus iure dicta dolores autem, eligendi tempore et.
          </p>
        </div>

        <Title class="mt-16">
          Skills
        </Title>

        <div class="md:ml-4">
          <Heading title="Languages">
            Listed in descending order.
          </Heading>

          <div class="flex flex-wrap items-center">
            <Tag>JavaScript (ES6)</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Go</Tag>
            <Tag>Python</Tag>
            <Tag>Java</Tag>
            <Tag>CSS/SASS</Tag>
            <Tag>SQL</Tag>
            <Tag>Kotlin</Tag>
            <Tag>Scala</Tag>
            <Tag>Dart</Tag>
          </div>

          <Heading
            title="Frameworks / Technologies"
            class="mt-8"
          >
            Not listed in any order.
          </Heading>

          <div class="flex flex-wrap items-center">
            <Tag>Vue</Tag>
            <Tag>Nuxt</Tag>
            <Tag>GraphQL</Tag>
            <Tag>gRPC</Tag>
            <Tag>TailwindCSS</Tag>
            <Tag>Redis</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>Angular</Tag>
            <Tag>jQuery</Tag>
            <Tag>Nginx</Tag>
            <Tag>Kafka</Tag>
            <Tag>Git</Tag>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>Docker</Tag>
            <Tag>Jenkins</Tag>
            <Tag>Spring Boot</Tag>
            <Tag>MySQL</Tag>
            <Tag>MongoDB</Tag>
            <Tag>Electron</Tag>
            <Tag>Firebase</Tag>
            <Tag>Tensorflow</Tag>
            <Tag>Scikit-learn</Tag>
            <Tag>Jupyter Notebook</Tag>
            <Tag>Pandas/Numpy/Matplotlib</Tag>
          </div>
        </div>

        <Title class="mt-16">
          Personal Projects
        </Title>

        <div class="md:ml-4">
          <Heading title="VGQL">
            <a href="https://github.com/FlorianWoelki/vgql">github.com/FlorianWoelki/vgql</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            A custom made Vue GraphQL CLI written in TypeScript. With the help of this CLI
            you can easily generate projects with the lovely preset of the Vue.js framework
            and GraphQL. The CLI will setup everything you need for this fullstack application.
          </p>

          <Heading
            title="Pneumonia Detection"
            class="mt-8"
          >
            <a href="https://github.com/FlorianWoelki/pneumonia_detection">github.com/FlorianWoelki/pneumonia_detection</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            A jupyter notebook that contains a exploratory analysis and transfer learning
            convulutional neural network detecting if a xray scan has pneumonia or not.
            Furthermore, I submitted this notebook to the official Kaggle competition.
          </p>

          <Heading
            title="Vue Cirrus"
            class="mt-8"
          >
            <a href="https://github.com/FlorianWoelki/vue-cirrus">github.com/FlorianWoelki/vue-cirrus</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            A Vue component library for the Cirrus CSS framework. It is really simple to use
            and lightweight as well.
          </p>

          <Heading
            title="Daycademy"
            class="mt-8"
          >
            <a href="https://github.com/daycademy">github.com/daycademy</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            Daycademy is a completly free to use german academy for learning how to code.
            On this self built end to end platform I teach how to code with interactive
            coding trainings and quizes.
          </p>

          <Heading
            title="YouTube Account"
            class="mt-8"
          >
            <a href="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber">Code mit FloW</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            In addition to the academy I have created a german speaking YouTube channel
            for teaching how to code. These professional created videos are in the academy
            available as well.
          </p>

          <Heading
            title="First published Game"
            class="mt-8"
          >
            <a href="https://gamejolt.com/games/way-to-love/135095">Way To Love</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            This is my first ever published game. The main goal of this game is to
            finish the jump and run with two characters that are mirrored. The game
            was written in Java with LibGDX.
          </p>

          <Heading
            title="Competition Game #59"
            class="mt-8"
          >
            <a href="https://gamejolt.com/games/way-to-love/135095">Revenge of the Clowns</a>
          </Heading>

          <p class="leading-7 text-gray-700">
            I've developed this game for the Beansjam event, where you need to develop
            a game with predefined themes. The goal is to throw or kill all the clowns from
            the plattform and level yourself up with powerups and upgrades. This game was written
            in pure Java without any additional library.
          </p>
        </div>
      </div>

      <div class="mt-16 md:mt-0">
        <Title>Education</Title>
        <div class="md:ml-4">
          <div class="mb-2 text-lg text-gray-900">
            2017 - 2020
          </div>
          <Heading title="HfTL Dual">
            B.S. Computer Science
          </Heading>
          <p class="leading-7 text-gray-700">
            Bachelorthesis:
            <i>Bluetooth Low Energy: A comparison between different machine learning algorithms with a variable object configuration in indoor areas.</i>
          </p>
        </div>

        <Title class="mt-16">
          Work Experience
        </Title>
        <div class="ml-4">
          <div class="mb-2 text-lg text-gray-900">
            October 2017 - Present
          </div>
          <Heading title="T-Systems International">
            Fullstack Softwarearchitect
          </Heading>
          <ul class="ml-10 leading-7 text-gray-700 list-disc">
            <li>Full-stack development on situational awareness dashboards using Angular/Vue, Spring and Scala/Java</li>
            <li>Implemented RESTful API with SpringBoot secured with JWT authentication</li>
            <li>Full-stack development on a real time indoor tracking service including UWB, LTE and BLE using Angular and Java with SpringBoot</li>
            <li>Android app development with Kotlin for pairing a BLE beacon with a specific QR-Code</li>
            <li>...</li>
          </ul>

          <div class="mt-8 mb-2 text-lg text-gray-900">
            October 2019 - Present
          </div>
          <Heading title="Company Consulting Team">
            IT Consultant
          </Heading>
          <ul class="ml-10 leading-7 text-gray-700 list-disc">
            <li>Front-end inhouse work for a fully functional HR-Tool with Vue and TypeScript</li>
            <li>Full-stack inhouse work for fully functional end to end polling tool written in Vue, TypeScript and Node.js</li>
            <li>Front-end project for a customer by developing a contact form for a real estate company</li>
            <li>Data Science project for a customer by merging and analyzing different data sources in Python</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Title from '@/components/Title.vue';
import Heading from '@/components/Heading.vue';
import Tag from '@/components/Tag.vue';

@Options({
  components: {
    Title,
    Heading,
    Tag,
  },
})
export default class Home extends Vue {}
</script>
