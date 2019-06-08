<template>
  <div class="container">
    <div class="faders">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <div class="items">
      <div class="entry" v-for="i in 5" :key=i>
        <img src="https://cdn.pixabay.com/photo/2019/05/20/22/41/apple-4217863_960_720.jpg">
      </div>
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-left: 25px;
}
.container .items {
  display: flex;
  align-items: center;
  width: fit-content;
  animation: carouselAnim 60s infinite alternate linear;
}
.container .items .entry {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 300px;
  background: white;
  margin: 1em;
}
.container .items .entry img {
  border-radius: 10px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.4);
}
@keyframes carouselAnim {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(calc(-100% + (3 * 300px)));
  }
}
@media only screen and (max-width: 768px) {
  .container .items {
    animation: carouselAnim 30s infinite alternate linear;
  }

  @keyframes carouselAnim {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(calc(-100% + (2 * 300px)));
    }
  }
}
.container .faders {
  width: 100%;
  position: absolute;
  height: 100%;
}
.container .faders .left,
.container .faders .right {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  width: 20%;
  height: 100%;
  position: absolute;
  z-index: 2;
}
.container .faders .right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>
