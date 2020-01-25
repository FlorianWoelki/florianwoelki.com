<template>
  <div class="home">
    <div
      id="splash-img"
      class="hero hero-img parallax-img fullscreen"
    >
      <div id="hero-body" class="u-center" style="min-width:50%;">
        <v-container>
          <img
            src="../assets/logo.png"
            alt="logo"
            class="u-center"
            width="250"
            height="250"
          >

          <v-space />

          <h1 class="u-text-center white">Florian Woelki</h1>

          <v-divider class="u-center" short />
          <h6 class="u-text-center white font-thin">Creator</h6>
          <v-divider class="u-center" short />

          <v-space />

          <v-row center>
            <v-col fluid>
              <a
                href="https://www.linkedin.com/in/florian-woelki/"
                target="_blank"
                class="u-text-center"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </v-col>
            <v-col fluid>
              <a
                href="https://github.com/FlorianWoelki"
                target="_blank"
                class="u-text-center"
              >
                <i class="fab fa-github fa-2x"></i>
              </a>
            </v-col>
            <v-col fluid>
              <a
                href="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber"
                target="_blank"
                class="u-text-center"
              >
                <i class="fab fa-youtube fa-2x"></i>
              </a>
            </v-col>
          </v-row>

          <v-space xlarge />
          <a id="click-to-projects" @click="scrollTo('Projects')">
            <h3 class="white u-text-center">
              <i class="fas fa-arrow-down animated pulse"></i>
            </h3>
          </a>
        </v-container>
      </div>
      <div id="fade"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  mounted() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (width >= 992) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || (document.documentElement
          || document.body.parentNode || document.body).scrollTop;
        if (scrollTop >= 15) {
          document.getElementById('fade').classList.add('faded');
        } else {
          document.getElementById('fade').classList.remove('faded');
        }
      });
    }
  },

  methods: {
    scrollTo: (name) => {
      document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style>
.home .divider {
  background-color: white;
  margin-top: 5px;
  margin-bottom: 5px;
}

#click-to-projects:hover {
  cursor: pointer;
}

#fade.faded {
  opacity: 1;
  transition: all 1s;
}
#fade {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0001), #fff);
  bottom: 0;
  height: 175px;
  left: 0;
  right: 0;
  opacity: 0;
  position: absolute;
  transition: all 1s;
}
.faded {
  opacity: .75;
}

#splash-img {
  background: url('../assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.home h5 {
  margin-top: -5px;
  text-transform: uppercase;
}
.home h6 {
  text-transform: uppercase;
}
.home a {
  color: white;
}
.home a:hover {
  color: #5c7fa2;
}
</style>
