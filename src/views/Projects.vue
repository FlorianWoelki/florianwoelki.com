<template>
  <v-container>
    <h3 class="u-text-center">Some of my Projects</h3>
    <v-divider center short />
    <p class="u-text-center">
      Below are just some projects that I have worked on in the past.
      I have worked with a wide range of applications ranging from Java
      applications to fully responsive webapps.
      <v-row center>
        <v-link href="https://github.com/FlorianWoelki" blank>
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
          title="Digit Me"
          subtitle="Website for digit recognition"
          description="This combines a website, which recognizes
            digits written by the client."
          image="https://i.imgur.com/94FNdNF.png"
          githubLink="https://github.com/FlorianWoelki/digit-me"
        />
      </v-col>
    </v-row>
    <v-row center>
      <v-col c6>
        <Project
          title="Watch Together"
          subtitle="A simple and clean watch together clone"
          description="I've created this project, to learn
            WebSockets, JavaScript and material design."
          image="https://i.imgur.com/x8DItYN.png"
          githubLink="https://github.com/FlorianWoelki/watch-together"
        />
      </v-col>
      <v-col c6>
        <Project
          title="Lise"
          subtitle="A swifty Sidebar framework"
          description="This library for iOS was written in Swift
            and it helps to create easy sidebars."
          image="https://i.imgur.com/GY3tlJv.png"
          githubLink="https://github.com/FlorianWoelki/lise"
        />
      </v-col>
    </v-row>
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
