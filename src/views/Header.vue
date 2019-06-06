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
</style>
