<template>
  <v-container>
    <h5>Projects</h5>
    <v-divider short />

    <Project
      title="Vue Cirrus"
      :tags="['Vue.js', 'CSS Framework']"
      description="This is a straightforward Vue.js components for the Cirrus CSS framework."
      projectLink="https://github.com/FlorianWoelki/vue-cirrus"
      websiteLink="https://florianwoelki.github.io/vue-cirrus/"
    />
  </v-container>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  components: {
    Project,
  },
};
</script>
