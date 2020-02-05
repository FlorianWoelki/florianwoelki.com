<template>
  <div class="project">
    <v-card equalHeight>
      <v-card-image :image="image">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      </v-card-image>
      <v-card-content>
        <v-space></v-space>
        <v-tag-container rounded grouped class="u-center">
          <slot></slot>
        </v-tag-container>

        <v-row class="u-text-center">
          <v-col fluid>
            <v-btn class="u-center" :href="githubLink" blank color="link">
              <i class="fab fa-github fa-lg"></i>
            </v-btn>
          </v-col>
          <v-col fluid v-if="websiteLink !== ''">
            <v-btn class="u-center" :href="websiteLink" blank color="link">
              <i class="fas fa-globe fa-lg"></i>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-content>
    </v-card>
  </div>
<!--
  <div class="wrapper">
    <img :src="image" alt="image">
    <div class="overlay">
      <div class="content u-text-center">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
        <v-tag-container class="u-center" grouped rounded>
          <slot></slot>
        </v-tag-container>
        <v-row center>
          <v-col fluid>
            <v-btn class="u-center" :href="githubLink" blank color="link">
              <i class="fab fa-github fa-2x"></i>
            </v-btn>
          </v-col>
          <v-col fluid v-if="websiteLink !== ''">
            <v-btn class="u-center" :href="websiteLink" blank color="link">
              <i class="fas fa-globe fa-2x"></i>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
  -->
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
/*.wrapper {
  width: 100%;
  margin: 0;
  position: relative;
}

.wrapper img {
  opacity: 1;
  display: block;
  width: 100%;
  max-height: 440px;
  transition: .5s ease;
}

.wrapper .content {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
}

.wrapper .overlay {
  opacity: 0;
  transition: .5s ease;
}

.wrapper:hover img {
  opacity: .5;
  filter: blur(0.1rem);
}
.wrapper:hover .overlay {
  opacity: 1;
}*/
</style>
