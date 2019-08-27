<template>
  <v-col class="col-fluid">
    <v-link :href="href" blank>
      <span class="icon">
        <i :class="iconClass + ' fa-lg'"></i>
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
