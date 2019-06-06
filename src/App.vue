<template>
  <div id="app">
    <NavBar />
    <!--<router-view/>-->
    <Header />
    <v-space xlarge />
    <AboutMe />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/views/Header.vue';
import AboutMe from '@/views/AboutMe.vue';

export default {
  components: {
    NavBar,
    Header,
    AboutMe,
  },
};
</script>
