<template>
  <div id="app">
    <NavBar />
    <!--<router-view/>-->
    <Header />
    <v-space xlarge />
    <Projects />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/views/Header.vue';
import Projects from '@/views/Projects.vue';

export default {
  components: {
    NavBar,
    Header,
    Projects,
  },
};
</script>
