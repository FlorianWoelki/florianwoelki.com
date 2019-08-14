<template>
  <div id="app">
    <NavBar />
    <!--<router-view/>-->
    <Header />

    <v-space xlarge />
    <Projects />
    <v-space xlarge />

    <v-space xlarge />
    <Background />
    <v-space xlarge />

    <About />
    <v-space xlarge />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/views/Header.vue';
import Projects from '@/views/Projects.vue';
import Background from '@/views/Background.vue';
import About from '@/views/About.vue';

export default {
  components: {
    NavBar,
    Header,
    Projects,
    Footer,
    Background,
    About,
  },
};
</script>
