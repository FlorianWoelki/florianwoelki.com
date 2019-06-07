<template>
  <div id="app">
    <NavBar />
    <!--<router-view/>-->
    <Header />
    <v-space xlarge />
    <Skills />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/views/Header.vue';
import Skills from '@/views/Skills.vue';

export default {
  components: {
    NavBar,
    Header,
    Skills,
  },
};
</script>
