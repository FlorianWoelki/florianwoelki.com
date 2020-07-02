<template>
  <div class="container mt-4">
    <h1 class="bb-1">
      Bucket List
    </h1>
    <div class="bb-1 bc-gray-400 mw-20" />
    <div class="row mt-1">
      <div
        v-for="columnIndex in Math.round(list.length / 3)"
        :key="columnIndex"
        class="col-4"
      >
        <p
          v-for="bucket in list.slice((columnIndex - 1) * 3, columnIndex * 3)"
          :key="bucket.name"
        >
          {{ bucket.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Bucket {
  name: string;
  done: boolean;
}

@Component
export default class BucketList extends Vue {
  private list: Array<Bucket> = [
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
      name: 'Exit a useful and helpful StartUp',
      done: false,
    },
    {
      name: 'Revolutionize the education system',
      done: false,
    },
  ];
}
</script>
