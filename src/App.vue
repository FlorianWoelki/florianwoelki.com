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

    <section class="padded">
      <h1>test test test test ets</h1>
    </section>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/views/Header.vue';
import Projects from '@/views/Projects.vue';
import Background from '@/views/Background.vue';

export default {
  components: {
    NavBar,
    Header,
    Projects,
    Footer,
    Background,
  },
};
</script>
