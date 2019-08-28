<template>
  <v-col class="col">
    <v-link :href="href" blank>
      <span class="icon">
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
