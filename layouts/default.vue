<template>
  <div class="antialiased">
    <navbar />
    <slot />
  </div>
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
