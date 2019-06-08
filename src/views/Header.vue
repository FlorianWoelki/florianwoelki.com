<template>
  <div class="home">
    <v-fullscreen link="https://images.pexels.com/photos/7101/wood-coffee-iphone-notebook.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=720&w=1280">
      <v-container>
        <img
          src="../assets/logo.png"
          alt="logo"
          class="center"
          width="250"
          height="250"
        >

        <h5 class="center white">Florian Woelki</h5>

        <v-divider
          class="center"
          short
        />
        <h6
          class="center white"
          style="font-weight: 100;"
        >Developer</h6>
        <v-divider
          class="center"
          short
        />

        <v-space />

        <v-row>
          <v-col
            c2
            o3
            center
          >
            <a
              href="https://www.linkedin.com/in/florian-woelki/"
              target="_blank"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </v-col>
          <v-col
            c2
            center
          >
            <a
              href="https://github.com/FlorianWoelki"
              target="_blank"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </v-col>
          <v-col
            c2
            center
          >
            <a
              href="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A?view_as=subscriber"
              target="_blank"
            >
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </v-col>
        </v-row>

        <v-space xlarge />

        <div class="center">
          <a href="#">
            <i class="white fas fa-arrow-down fa-3x infinite alternate hover-grow"></i>
          </a>
        </div>
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
