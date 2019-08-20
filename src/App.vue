<template>
  <div id="app">
    <NavBar :navItems="navItems" />
    <Header />

    <section id="Projects">
      <v-space xlarge />
      <Projects />
      <v-space xlarge />
    </section>

    <section id="Background" class="clearfix">
      <v-space xlarge />
      <Background />
      <v-space xlarge />
    </section>

    <section id="About">
      <v-space xlarge />
      <About />
      <v-space xlarge />
    </section>

    <section id="Contact" class="clearfix">
      <v-space xlarge />
      <Contact />
      <Footer />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/views/Header.vue';
import Projects from '@/views/Projects.vue';
import Background from '@/views/Background.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';

export default {
  components: {
    NavBar,
    Header,
    Projects,
    Footer,
    Background,
    About,
    Contact,
  },

  data() {
    return {
      navItems: [],
    };
  },

  mounted() {
    this.navItems = [
      { name: 'Projects', icon: 'project-diagram' },
      { name: 'Background', icon: 'tasks' },
      { name: 'About', icon: 'person-booth' },
      { name: 'Contact', icon: 'id-card' },
    ];
  },
};
</script>
