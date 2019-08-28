<template>
  <div class="home">
    <v-fullscreen link="https://images.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=720&w=1280">
      <v-container>
        <img
          src="../assets/logo.png"
          alt="logo"
          class="u-center"
          width="250"
          height="250"
        >

        <v-space />

        <h5 class="u-center white">Florian Woelki</h5>

        <v-divider center short style="background-color:white;" />
        <h6 class="u-center white font-thin">Creator</h6>
        <v-divider center short style="background-color:white;" />

        <v-space />

        <v-row>
          <v-col c4 center>
            <a
              href="https://www.linkedin.com/in/florian-woelki/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </v-col>
          <v-col c4 center>
            <a
              href="https://github.com/FlorianWoelki"
              target="_blank"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </v-col>
          <v-col c4 center>
            <a
              href="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber"
              target="_blank"
            >
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-fullscreen>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
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
  color: #34495e;
}
</style>
