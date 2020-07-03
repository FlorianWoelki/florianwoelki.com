<template>
  <div class="container mt-4">
    <div class="absolute t-2 r-4 xs-hide">
      <TriangleSVG />
    </div>
    <div class="absolute b-4 l-4 xs-hide">
      <TriangleSVG is-right />
    </div>
    <h1 class="bb-1 inline-block underline-red">
      Bucket List
    </h1>
    <div class="row mt-1 p-0">
      <div
        v-for="columnIndex in 3"
        :key="columnIndex"
        class="col-4 p-0"
      >
        <p
          v-for="
            (bucket, index) in list.slice(
              (columnIndex - 1) * Math.round(list.length / 3),
              Math.round(list.length / 3) * columnIndex
            )
          "
          :key="bucket.name"
          class="font-18"
        >
          <span class="text-red-500 font-bold">
            {{
              (index + 1 - Math.round(list.length / 3)) + Math.round(list.length / 3) * columnIndex
            }}
          </span>
          <del v-if="bucket.done">{{ bucket.name }}</del>
          <span
            v-else
            class="font-bold"
          >
            {{ bucket.name }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TriangleSVG from '@/components/TriangleSVG.vue';

interface Bucket {
  name: string;
  done: boolean;
}

@Component({
  components: {
    TriangleSVG,
  },
})
export default class BucketList extends Vue {
  private list: Array<Bucket> = [
    {
      name: 'Successful YouTube channel (min 100k)',
      done: false,
    },
    {
      name: 'Create a successful Podcast',
      done: false,
    },
    {
      name: 'Work in London',
      done: false,
    },
    {
      name: 'Work in Silicon Valley',
      done: false,
    },
    {
      name: 'Get a 6 figure income under 30',
      done: false,
    },
    {
      name: 'Countdown New Year\'s Eve in Times Square',
      done: false,
    },
    {
      name: 'Exit a useful and helpful StartUp',
      done: false,
    },
    {
      name: 'Change the education system',
      done: false,
    },
    {
      name: 'Fall in love',
      done: false,
    },
    {
      name: 'Experience zero gravity',
      done: false,
    },
    {
      name: 'Buy the family a house',
      done: false,
    },
    {
      name: 'Make an important speech',
      done: false,
    },
    {
      name: 'Go to space',
      done: false,
    },
    {
      name: 'Write a bestselling book',
      done: false,
    },
  ];
}
</script>
