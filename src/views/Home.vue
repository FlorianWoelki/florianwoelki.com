<template>
  <div>
    <div class="bg-gray-200 relative">
      <div class="container pt-16 pb-16">
        <div class="translate-l-full absolute top-2 right-4 xs-hide">
          <TriangleSVG is-right />
        </div>
        <div class="translate-r-full absolute bottom-2 left-0 xs-hide">
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

    <div class="bg-gray-200 pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <StatsBox show-border />
          </div>
          <div class="col-6">
            <StatsBox />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TriangleSVG from '@/components/TriangleSVG.vue';
import StatsBox from '@/components/StatsBox.vue';

@Component({
  components: { TriangleSVG, StatsBox },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.translate-r-full {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.translate-l-full {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>
