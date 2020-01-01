<template>
  <v-navbar
    fixed
    dark
  >
    <v-nav-region position="center">
      <v-navbar-item
        v-for="(navItem, index) in navItems"
        :key="index"
        @click="scrollTo($event, navItem.name)"
        :tooltipText="navItem.name"
        tooltipBottom
      >
        <i :class="'fas fa-' + navItem.icon + ' fa-lg'"></i>
      </v-navbar-item>
    </v-nav-region>
  </v-navbar>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
    },
  },
  methods: {
    scrollTo: (event, name) => {
      event.preventDefault();
      document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
