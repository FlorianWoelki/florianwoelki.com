<template>
  <div class="py-16 bg-gray-100 overflow-x-hidden">
    <div class="relative container mx-auto px-24">
      <div class="hidden md:block absolute bottom-0 left-0 translate-l-full">
        <TriangleSVG is-right />
      </div>
      <div class="hidden md:block absolute top-0 right-0 translate-r-full">
        <TriangleSVG is-right />
      </div>
      <h1 class="text-6xl">
        test
      </h1>
      <button
        class="text-sm shadow sm:shadow-none block w-full sm:w-auto rounded-lg bg-indigo-500
        uppercase text-white tracking-wide font-semibold px-6 py-4"
      >
        GET THINGS DONE
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TriangleSVG from '@/components/TriangleSVG.vue';

@Component({
  components: {
    TriangleSVG,
  },
})
export default class Home extends Vue {}
</script>
