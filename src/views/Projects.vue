<template>
  <div class="projects">
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
    </v-container>

    <v-row noPadding>
      <v-col c6 noPadding>
        <Project
          title="Vue Cirrus"
          subtitle="Vue.js CSS component framework"
          image="https://i.imgur.com/M1l8Zjy.png"
          githubLink="https://github.com/FlorianWoelki/vue-cirrus"
          websiteLink="https://florianwoelki.github.io/vue-cirrus/#/"
        >
          <v-tag success>vue.js</v-tag>
          <v-tag link>css</v-tag>
          <v-tag warning>javascript</v-tag>
          <v-tag black>framework</v-tag>
        </Project>
      </v-col>
      <v-col c6 noPadding>
        <Project
          title="Digit Me"
          subtitle="Website for digit recognition"
          image="https://i.imgur.com/94FNdNF.png"
          githubLink="https://github.com/FlorianWoelki/digit-me"
        >
          <v-tag success>vue.js</v-tag>
          <v-tag danger>Jupyter Notebook</v-tag>
          <v-tag info>python</v-tag>
          <v-tag black>deep learning</v-tag>
        </Project>
      </v-col>
    </v-row>
    <v-row>
      <v-col c6 noPadding>
        <Project
          title="Watch Together"
          subtitle="A simple and clean watch together clone"
          description="I've created this project, to learn
            WebSockets, JavaScript and material design."
          image="https://i.imgur.com/x8DItYN.png"
          githubLink="https://github.com/FlorianWoelki/watch-together"
        >
          <v-tag warning>node.js</v-tag>
          <v-tag link>css</v-tag>
          <v-tag black>material</v-tag>
        </Project>
      </v-col>
      <v-col c6 noPadding>
        <Project
          title="Lise"
          subtitle="A swifty Sidebar framework"
          description="This library for iOS was written in Swift
            and it helps to create easy sidebars."
          image="https://i.imgur.com/GY3tlJv.png"
          githubLink="https://github.com/FlorianWoelki/lise"
        >
          <v-tag warning>Swift</v-tag>
          <v-tag black>framework</v-tag>
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
