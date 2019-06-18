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
