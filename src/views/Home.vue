<template>
  <div class="home">
    <v-space xlarge />
    <v-space xlarge />
    <v-container>
      <img
        src="../assets/logo.jpg"
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
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style>
.home {
  background-color: #212123;
  width: 100%;
  height: 100vh;
}
.home h5 {
  margin-top: -5px;
  text-transform: uppercase;
}
.home h6 {
  text-transform: uppercase;
}
</style>
