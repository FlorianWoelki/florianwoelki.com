<template>
  <div class="h-full">
    <div class="grid h-screen grid-cols-2 gap-12">
      <div class="container px-16 py-16 mx-auto break-words bg-gray-100">
        <div class="max-w-2xl ml-auto space-y-12">
          <!-- HEADER -->
          <div class="flex items-center justify-between">
            <h1 class="text-5xl font-light text-gray-800 uppercase">
              Florian <span class="block text-6xl font-bold">Woelki</span>
            </h1>
            <div class="space-y-2 text-center">
              <p class="text-gray-400">
                Download resumé
              </p>
              <div class="flex items-center justify-between space-x-2">
                <button
                  type="button"
                  class="px-6 py-2 font-medium leading-7 text-gray-400 transition duration-300 ease-in-out bg-transparent border border-gray-300 rounded-md focus:outline-none hover:bg-gray-300 hover:text-white"
                >
                  PDF
                </button>
                <button
                  type="button"
                  class="px-6 py-2 font-medium leading-7 text-gray-400 transition duration-300 ease-in-out bg-transparent border border-gray-300 rounded-md focus:outline-none hover:bg-gray-300 hover:text-white"
                >
                  Text
                </button>
              </div>
            </div>
          </div>

          <!-- SOCIALS -->
          <div class="grid grid-cols-3 text-gray-400">
            <div class="flex items-center space-x-2">
              <div>
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- eslint-disable-next-line -->
                  <path d="M12 0.297001C5.37 0.297001 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297001 12 0.297001" />
                </svg>
              </div>
              <a
                href="https://github.com/FlorianWoelki"
                target="_blank"
                class="transition duration-300 ease-in-out hover:text-gray-500"
              >/FlorianWoelki</a>
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
                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
                </svg>
              </div>
              <a
                href="https://www.linkedin.com/in/florian-woelki/"
                target="_blank"
                class="transition duration-300 ease-in-out hover:text-gray-500"
              >/FlorianWoelki</a>
            </div>
            <div class="flex items-center space-x-1">
              <div>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              </div>
              <a
                href="mailto:florianwoelki@gmx.de"
                target="_blank"
                class="transition duration-300 ease-in-out hover:text-gray-500"
              >FlorianWoelki@gmx.de</a>
            </div>
          </div>

          <!-- ABOUT -->
          <div>
            <h3 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
              About
            </h3>
            <h4 class="-mt-1 text-gray-500 uppercase">
              Fullstack Engineer
            </h4>
            <p class="mt-2 leading-7 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, nesciunt deserunt quia laudantium aut quos aperiam, animi doloribus similique quidem voluptatem! Necessitatibus enim eaque nostrum possimus quo provident consectetur ut.
            </p>
          </div>

          <!-- SKILLS -->
          <div>
            <h3 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
              Skills
            </h3>
            <h4 class="-mt-1 text-gray-500 uppercase">
              Languages
            </h4>
            <div class="flex flex-wrap items-center mt-1">
              <Tag
                v-for="(language, index) in languages"
                :key="index"
                @click="setClickedFilter(language)"
                :selected="clickedFilter === language"
              >
                {{ language }}
              </Tag>
            </div>
            <h4 class="mt-8 text-gray-500 uppercase">
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
            <h3 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
              Education
            </h3>
            <h4 class="flex items-center justify-between -mt-1 text-gray-500 uppercase">
              HfTL DUAL B.S. Computer Science
              <span class="font-normal text-gray-400">2017 - 2020</span>
            </h4>

            <p class="mt-2 leading-7 text-gray-500">
              Bachelorthesis:
              <span class="italic">Bluetooth Low Energy Proximity: A comparison between different machine learning algorithms with a variable object configuration in indoor areas.</span>
            </p>
          </div>

          <!-- WORK EXPERIENCE -->
          <div>
            <h3 class="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
              Work Experience
            </h3>
            <h4 class="flex items-center justify-between -mt-1 text-gray-500 uppercase">
              <span>T-Systems International</span>
              <span class="font-normal text-gray-400">2017 - Present</span>
            </h4>
            <h4 class="flex items-center justify-between -mt-1 italic text-gray-500 uppercase">
              Fullstack Softwarearchitect
            </h4>

            <p class="mt-2 leading-7 text-gray-500">
              <ul class="ml-4 leading-7 text-gray-500 list-disc">
                <li>Full-stack development on situational awareness dashboards using Angular/Vue, Spring and Scala/Java</li>
                <li>Implemented RESTful API with SpringBoot secured with JWT authentication</li>
                <li>Full-stack development on a real time indoor tracking service including UWB, LTE and BLE using Angular and Java with SpringBoot</li>
                <li>Android app development with Kotlin for pairing a BLE beacon with a specific QR-Code</li>
                <li>...</li>
              </ul>
            </p>

            <h4 class="flex items-center justify-between mt-8 text-gray-500 uppercase">
              <span>Company Consulting Team</span>
              <span class="font-normal text-gray-400">2019 - Present</span>
            </h4>
            <h4 class="flex items-center justify-between -mt-1 italic text-gray-500 uppercase">
              IT Consultant
            </h4>

            <p class="mt-2 leading-7 text-gray-500">
              <ul class="ml-4 leading-7 text-gray-500 list-disc">
                <li>Front-end inhouse work for a fully functional HR-Tool with Vue and TypeScript</li>
                <li>Full-stack inhouse work for fully functional end to end polling tool written in Vue, TypeScript and Node.js</li>
                <li>Front-end project for a customer by developing a contact form for a real estate company</li>
                <li>Data Science project for a customer by merging and analyzing different data sources in Python</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <!-- PERSONAL PROJECTS -->
      <div class="container px-16 py-16 mx-auto break-words">
        <div class="max-w-2xl mr-auto space-y-12">
          <h1 class="text-5xl font-light text-gray-800 uppercase">
            Personal <span class="block text-6xl font-bold">Projects</span>
          </h1>

          <Project
            title="VGQL"
            link="https://github.com/FlorianWoelki/vgql"
            link-title="github.com/FlorianWoelki/vgql"
            :tags="['GraphQL', 'TypeScript', 'Vue', 'Git', 'Node.js']"
            :clicked-filter="clickedFilter"
          >
            A custom made Vue GraphQL CLI written in TypeScript. With the help of this CLI
            you can easily generate projects with the lovely preset of the Vue.js framework
            and GraphQL. The CLI will setup everything you need for this fullstack application.
          </Project>

          <Project
            title="Pneumonia Detection"
            link="https://github.com/FlorianWoelki/pneumonia_detection"
            link-title="github.com/FlorianWoelki/pneumonia_detection"
            :tags="['Python', 'Pandas/Numpy/Matplotlib', 'Jupyter Notebook', 'Tensorflow', 'Git']"
            :clicked-filter="clickedFilter"
          >
            A jupyter notebook that contains a exploratory analysis and transfer learning
            convulutional neural network detecting if a xray scan has pneumonia or not.
            Furthermore, I submitted this notebook to the official Kaggle competition.
          </Project>

          <Project
            title="Vue Cirrus"
            link="https://github.com/FlorianWoelki/vue-cirrus"
            link-title="github.com/FlorianWoelki/vue-cirrus"
            :tags="['Vue', 'JavaScript (ES6)', 'CSS/SASS', 'Git']"
            :clicked-filter="clickedFilter"
          >
            A Vue component library for the Cirrus CSS framework. It is really simple to use
            and lightweight as well.
          </Project>

          <Project
            title="Daycademy"
            link="https://github.com/daycademy"
            link-title="github.com/daycademy"
            :tags="['TypeScript', 'JavaScript (ES6)', 'CSS/SASS', 'Git', 'GraphQL', 'Node.js', 'TailwindCSS']"
            :clicked-filter="clickedFilter"
          >
            Daycademy is a completly free to use german academy for learning how to code.
            On this self built end to end platform I teach how to code with interactive
            coding trainings and quizes..
          </Project>

          <Project
            title="YouTube Account"
            link="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber"
            link-title="Code mit FloW"
            :tags="['Go', 'Python', 'JavaScript (ES6)', 'GraphQL', 'Vue', 'Nuxt', 'TailwindCSS']"
            :clicked-filter="clickedFilter"
          >
            In addition to the academy I have created a german speaking YouTube channel
            for teaching how to code. These professional created videos are in the academy
            available as well.
          </Project>

          <Project
            title="First published Game"
            link="https://gamejolt.com/games/way-to-love/135095"
            link-title="Way To Love"
            :tags="['Java']"
            :clicked-filter="clickedFilter"
          >
            This is my first ever published game. The main goal of this game is to
            finish the jump and run with two characters that are mirrored. The game
            was written in Java with LibGDX.
          </Project>

          <Project
            title="Competition Game #59"
            link="https://flowy.itch.io/revenge-of-the-clowns"
            link-title="Revenge of the Clowns"
            :tags="['Java']"
            :clicked-filter="clickedFilter"
          >
            I've developed this game for the Beansjam event, where you need to develop
            a game with predefined themes. The goal is to throw or kill all the clowns from
            the plattform and level yourself up with powerups and upgrades. This game was written
            in pure Java without any additional library.
          </Project>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Tag from '@/components/Tag.vue';
import Project from '@/components/Project.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    Tag,
    Project,
  },
  setup() {
    const clickedFilter = ref('');
    const languages = ref(['JavaScript (ES6)', 'TypeScript', 'Go', 'Python', 'Java', 'CSS/SASS', 'SQL', 'Kotlin', 'Scala', 'Dart']);
    const technologies = ref(['Vue', 'Nuxt', 'GraphQL', 'gRPC', 'TailwindCSS', 'Redis', 'PostgreSQL', 'Angular',
      'jQuery', 'Nginx', 'Kafka', 'Git', 'React', 'Node.js', 'Docker', 'Jenkins', 'Spring Boot',
      'MySQL', 'MongoDB', 'Electron', 'Firebase', 'Tensorflow', 'Scikit-learn', 'Jupyter Notebook',
      'Pandas/Numpy/Matplotlib']);

    const setClickedFilter = (criterium: string): void => {
      if (clickedFilter.value === criterium) {
        clickedFilter.value = '';
      } else {
        clickedFilter.value = criterium;
      }
    };

    return {
      clickedFilter,
      languages,
      technologies,
      setClickedFilter,
    };
  },
});
</script>
