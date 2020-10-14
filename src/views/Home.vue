<template>
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
          <ul class="text-gray-400">
            <li>email</li>
            <li>github</li>
          </ul>
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
