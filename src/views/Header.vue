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

          <v-divider center short style="background-color:white;" />
          <h6 class="u-text-center white font-thin">Creator</h6>
          <v-divider center short style="background-color:white;" />

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
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
#splash-img {
  background: url('https://www.ubackground.com/_ph/17/56501308.jpg');
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
