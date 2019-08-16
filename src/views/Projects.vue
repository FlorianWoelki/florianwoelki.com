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
          <Project
            title="Vue Cirrus"
            subtitle="Vue.js CSS component framework"
            description="I really like the Cirrus CSS framework,
              but I wondered if there is a Vue.js framework."
            image="https://i.imgur.com/M1l8Zjy.png"
            githubLink="https://github.com/FlorianWoelki/vue-cirrus"
            websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
          />
        </v-col>
        <v-col c6>
          <Project
            title="Vue Cirrus"
            subtitle="Vue.js CSS component framework"
            description="I really like the Cirrus CSS framework,
              but I wondered if there is a Vue.js framework."
            image="https://i.imgur.com/M1l8Zjy.png"
            githubLink="https://github.com/FlorianWoelki/vue-cirrus"
            websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
          />
        </v-col>
      </v-row>
      <v-row center>
        <v-col c6>
          <Project
            title="Vue Cirrus"
            subtitle="Vue.js CSS component framework"
            description="I really like the Cirrus CSS framework,
              but I wondered if there is a Vue.js framework."
            image="https://i.imgur.com/M1l8Zjy.png"
            githubLink="https://github.com/FlorianWoelki/vue-cirrus"
            websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
          />
        </v-col>
        <v-col c6>
          <Project
            title="Vue Cirrus"
            subtitle="Vue.js CSS component framework"
            description="I really like the Cirrus CSS framework,
              but I wondered if there is a Vue.js framework."
            image="https://i.imgur.com/M1l8Zjy.png"
            githubLink="https://github.com/FlorianWoelki/vue-cirrus"
            websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
          />
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
