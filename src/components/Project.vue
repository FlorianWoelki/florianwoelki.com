<template>
  <div class="project">
    <v-row>
      <v-col c6>
        <h6>{{title}}</h6>
        <div
          v-for="tag in tags"
          :key="tag"
          class="tag">
          {{tag}}
        </div>
        <p>{{description}}</p>

        <a
          v-if="websiteLink"
          :href="websiteLink"
          target="_blank"
        >
          <i class="fab fa-chrome fa-2x"></i>
        </a>

        <a
          :href="projectLink"
          target="_blank"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </v-col>
      <v-col c6>
        <Slider />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  components: {
    Slider,
  },
  props: {
    title: String,
    description: String,
    tags: Array,
    projectLink: String,
    websiteLink: String,
  },
};
</script>

<style>
.project a {
  color: #bdc3c7;
  margin-right: 25px;
}
.project a:hover {
  color: #34495e;
}
.project h6 {
  margin-bottom: 0.5em;
}
.project .tag {
  align-items: center;
  background-color: rgb(238, 238, 238);
  color: rgb(34, 34, 34);
  display: inline-flex;
  font-size: 85%;
  line-height: 1.5;
  min-height: 1.5rem;
  padding: 0 0.5rem;
  margin: 0 0.25rem 0 0;
  border-radius: 2px;
}
</style>
