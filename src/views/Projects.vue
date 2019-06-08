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
    <Project
      title="Lise"
      :tags="['iOS', 'Swift 5', 'Framework']"
      description="An iOS framework for creating easy sidebars."
      projectLink="https://github.com/FlorianWoelki/lise"
    />
    <Project
      title="Watch Together"
      :tags="['JavaScript', 'Socket.io', 'Node.js']"
      description="This is a watch together clone written in Node.js with Socket.io
       and simple JavaScript."
      projectLink="https://github.com/FlorianWoelki/watch-together"
    />
    <Project
      title="Flow Lang"
      :tags="['Java', 'Java Language']"
      description="It is a custom language written in Java."
      projectLink="https://github.com/FlorianWoelki/Flow-Lang"
    />
    <Project
      title="Nong"
      :tags="['Java', 'Artifical Intelligence', 'Neural Networks']"
      description="A pong game written in Java and therefore a artifical intelligenc
      that learns while it plays."
      projectLink="https://github.com/FlorianWoelki/Nong"
    />
    <Project
      title="Titanic Classification"
      :tags="['Python', 'Artifical Intelligence', 'Deep Learning']"
      description="The titanic classification dataset is a classic problem in deep
      learning and this is my finished version of it."
      projectLink="https://github.com/FlorianWoelki/titanic_classification"
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
