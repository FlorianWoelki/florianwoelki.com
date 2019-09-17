<template>
  <div class="wrapper">
    <img :src="image" alt="image">
    <div class="overlay">
      <div class="content u-text-center">
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
        <v-row center>
          <v-col fluid>
            <v-btn center :href="githubLink" blank link>
              <i class="fab fa-github fa-2x"></i>
            </v-btn>
          </v-col>
          <v-col fluid v-if="websiteLink !== ''">
            <v-btn center :href="websiteLink" blank link>
              <i class="fas fa-globe fa-2x"></i>
            </v-btn>
          </v-col>
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
.wrapper {
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
}
</style>
