<template>
  <div class="bg-gray-200 relative">
    <div class="container pt-16 pb-16">
      <div class="absolute t-2 r-4 xs-hide">
        <TriangleSVG is-right />
      </div>
      <div class="absolute b-4 xs-hide">
        <TriangleSVG is-right />
      </div>
      <h1 class="mt-0 mb-1 font-bold">
        Florian Woelki
      </h1>
      <p class="font-24 line-height-30">
        Softwaredeveloper, Innovator, Creator
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TriangleSVG from '@/components/TriangleSVG.vue';

@Component({
  components: { TriangleSVG },
})
export default class Home extends Vue {

}
</script>
