<template>
  <v-navbar
    fixed
    dark
  >
    <div class="nav-center">
      <v-navbar-item
        v-for="(navItem, index) in navItems"
        :key="index"
        :tooltipText="navItem.name"
        tooltipBottom
      >
        <i :class="'fas fa-' + navItem.icon + ' fa-lg'"></i>
      </v-navbar-item>
    </div>
  </v-navbar>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'Projects', icon: 'project-diagram' },
        { name: 'Background', icon: 'tasks' },
        { name: 'Timeline', icon: 'stream' },
        { name: 'About', icon: 'person-booth' },
        { name: 'Contact', icon: 'id-card' },
      ],
    };
  },
};
</script>
