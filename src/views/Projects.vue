<template>
  <section class="projects">
    <v-container>
      <h3 class="text-center">Some of my Projects</h3>
      <v-divider class="center" short />
      <p class="text-center">
        Below are just some projects that I have worked on in the past.
        I have worked with a wide range of applications ranging from Java
        applications to fully responsive webapps.
      </p>

      <Project />
    </v-container>
  </section>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  components: {
    Project,
  },
};
</script>
