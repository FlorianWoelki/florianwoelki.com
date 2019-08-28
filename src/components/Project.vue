<template>
  <div class="project">
    <div class="card">
      <div class="card-container">
        <div class="card-image" :style="'background-image: url(' + image + ')'"></div>
        <div class="title-container">
          <p class="title">{{ title }}</p>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <div class="content">
        <p>{{ description }}</p>
      </div>
      <div class="action-bar">
        <v-row center>
          <v-btn :href="githubLink" blank link outline>
            <i class="fab fa-github fa-2x"></i>
          </v-btn>
          <v-btn v-if="websiteLink !== ''" :href="websiteLink" blank link outline>
            <i class="fas fa-globe fa-2x"></i>
          </v-btn>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    websiteLink: {
      type: String,
      default: '',
    },
    githubLink: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.project .card-image {
  filter: brightness(75%);
}
</style>
