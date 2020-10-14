<template>
  <div class="h-screen bg-gray-100">
    <div class="py-32 bg-gray-800">
      <div class="container px-16 mx-auto">
        <div class="flex flex-col flex-wrap md:flex-row lg:items-center">
          <div class="px-8 md:w-4/6">
            <h1 class="mb-2 text-3xl font-semibold leading-none tracking-wider text-white uppercase md:text-2xl lg:text-3xl xl:text-5xl">
              Florian Woelki
            </h1>
            <h2 class="text-2xl tracking-wide text-gray-500 uppercase">
              Computer Science Major
            </h2>
          </div>
          <div class="md:w-2/6">
            <ul class="text-lg text-gray-400">
              <li class="flex items-center space-x-2">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                  clip-rule="evenodd"
                /></svg>
                <span>florianwoelki@gmx.de</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container grid grid-cols-2 px-16 mx-auto">
      <div>
        <h2 class="mt-16 mb-4 text-3xl font-bold tracking-widest text-gray-800 uppercase">
          About
        </h2>

        <div class="ml-4">
          <div class="px-2 py-1 mb-4 border-l-4 border-gray-800">
            <p class="text-lg font-semibold tracking-wide text-gray-800 uppercase">
              Florian Woelki
            </p>
            <p class="text-gray-700">
              Fullstack Softwareengineer
            </p>
          </div>
          <p class="leading-7 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere suscipit cumque reprehenderit doloribus iure dicta dolores autem, eligendi tempore et.
          </p>
        </div>

        <h2 class="mt-10 mb-4 text-3xl font-bold tracking-widest text-gray-800 uppercase">
          Skills
        </h2>

        <div class="ml-4">
          <div class="px-2 py-1 mb-4 border-l-4 border-gray-800">
            <p class="text-lg font-semibold tracking-wide text-gray-800 uppercase">
              Languages
            </p>
            <p class="text-gray-700">
              Fullstack Softwareengineer
            </p>
          </div>

          <div class="flex items-center space-x-1">
            <div class="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg">
              Java
            </div>
            <div class="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg">
              TypeScript
            </div>
          </div>

          <div class="px-2 py-1 mt-8 mb-4 border-l-4 border-gray-800">
            <p class="text-lg font-semibold tracking-wide text-gray-800 uppercase">
              Frameworks / Technologies
            </p>
          </div>

          <div class="flex items-center space-x-1">
            <div class="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg">
              Java
            </div>
            <div class="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg">
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
