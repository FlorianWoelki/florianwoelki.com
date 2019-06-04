<template>
  <v-navbar
    fixed
    dark
  >
    <div class="nav-center">
      <v-navbar-item
        v-for="navItem in navItems"
        :key="navItem"
      >
        {{navItem}}
      </v-navbar-item>
    </div>
  </v-navbar>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        // TODO: Convert strings to icons
        'Me',
        'Timeline',
        'Projects',
        'Skills',
        'Contact',
      ],
    };
  },
};
</script>
