<template>
  <section id="Projects">
    <v-container>
      <h3 class="text-center">Some of my Projects</h3>
      <v-divider class="center" short />
      <p class="text-center">
        Below are just some projects that I have worked on in the past.
        I have worked with a wide range of applications ranging from Java
        applications to fully responsive webapps.
        <v-row>
          <v-link squared href="https://github.com/FlorianWoelki">
            All projects on GitHub
          </v-link>
        </v-row>
      </p>

      <v-row center>
        <v-col c6>
          <Project />
        </v-col>
        <v-col c6>
          <Project />
        </v-col>
      </v-row>
      <v-row center>
        <v-col c6>
          <Project />
        </v-col>
        <v-col c6>
          <Project />
        </v-col>
      </v-row>
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
