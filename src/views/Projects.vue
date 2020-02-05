<template>
  <div class="projects">
    <v-container>
      <h3 class="u-text-center">Some of my Projects</h3>
      <v-divider class="u-center" short />
      <p class="u-text-center">
        Below are just some projects that I have worked on in the past.
        I have worked with a wide range of applications ranging from Java
        applications to fully responsive webapps.
        <v-row class="u-center">
          <v-link href="https://github.com/FlorianWoelki" blank>
            All projects on GitHub
          </v-link>
        </v-row>
      </p>
    </v-container>

    <v-space xlarge></v-space>

    <v-row class="u-center">
      <v-col c="3">
        <Project
          title="Vue Cirrus"
          subtitle="Vue.js CSS component framework"
          image="https://i.imgur.com/KvB3oUg.png"
          githubLink="https://github.com/FlorianWoelki/vue-cirrus"
          websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
        >
          <v-tag color="success">vue.js</v-tag>
          <v-tag color="link">css</v-tag>
          <v-tag color="warning">javascript</v-tag>
          <v-tag color="black">framework</v-tag>
        </Project>
      </v-col>
      <v-col c="3">
        <Project
          title="Digit Me"
          subtitle="Website for digit recognition"
          image="https://i.imgur.com/94FNdNF.png"
          githubLink="https://github.com/FlorianWoelki/digit-me"
        >
          <v-tag color="success">vue.js</v-tag>
          <v-tag color="danger">Jupyter Notebook</v-tag>
          <v-tag color="info">python</v-tag>
          <v-tag color="black">deep learning</v-tag>
        </Project>
      </v-col>
    </v-row>
    <v-row class="u-center">
      <v-col c="3">
        <Project
          title="Watch Together"
          subtitle="A simple and clean watch together clone"
          description="I've created this project, to learn
            WebSockets, JavaScript and material design."
          image="https://i.imgur.com/x8DItYN.png"
          githubLink="https://github.com/FlorianWoelki/watch-together"
        >
          <v-tag color="warning">node.js</v-tag>
          <v-tag color="link">css</v-tag>
          <v-tag color="black">material</v-tag>
        </Project>
      </v-col>
      <v-col c="3">
        <Project
          title="Lise"
          subtitle="A swifty Sidebar framework"
          description="This library for iOS was written in Swift
            and it helps to create easy sidebars."
          image="https://i.imgur.com/GY3tlJv.png"
          githubLink="https://github.com/FlorianWoelki/lise"
        >
          <v-tag color="warning">Swift</v-tag>
          <v-tag color="black">framework</v-tag>
        </Project>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Project from '@/components/Project.vue';

export default {
  components: {
    Project,
  },
};
</script>

<style>
.projects .divider {
  margin-top: 5px;
}
</style>
