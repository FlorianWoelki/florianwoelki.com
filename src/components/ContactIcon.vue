<template>
  <v-col fluid>
    <v-link :href="href" blank>
      <span class="icon text-dark">
        <i :class="iconClass + ' fa-2x'"></i>
      </span>
    </v-link>
  </v-col>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.icon.text-dark {
  color: #595959 !important;
}
.icon.text-dark:hover {
  color: #363636 !important;
}
</style>
