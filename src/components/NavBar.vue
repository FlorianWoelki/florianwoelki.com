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
        <i :class="'fas fa-' + navItem + ' fa-lg'"></i>
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
        'person-booth',
        'stream',
        'project-diagram',
        'tasks',
        'id-card',
      ],
    };
  },
};
</script>
