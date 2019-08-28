<template>
  <v-navbar
    fixed
    dark
  >
    <div class="nav-center">
      <div
        v-for="(navItem, index) in navItems"
        :key=index
        :data-tooltip="navItem.name"
        class="tooltip tooltip--bottom nav-item"
      >
        <a @click="scrollTo(navItem.name)">
          <i :class="'fas fa-' + navItem.icon + ' fa-lg'"></i>
        </a>
      </div>
    </div>
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
    scrollTo: (name) => {
      document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
