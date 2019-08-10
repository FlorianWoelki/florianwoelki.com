<template>
  <section
    id="background"
    class="clearfix"
  >
    <div class="row no-padding">
      <div class="fill-height fill-width">
        <div class="vertical-align-middle center">
          <div class="content text-center">
            <h3 class="white">Background</h3>
            <div class="divider divider-short center"></div>
          </div>
        </div>
      </div>

      <div class="col-right padded">
        <div class="content">
          <h3>test</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.onscroll = () => {
      const scrollTop = window.pageYOffset || (document.documentElement
        || document.body.parentNode || document.body).scrollTop;
      const refElement = document.getElementById('background');
      const elementOffset = refElement.offsetTop;
      if (scrollTop >= elementOffset - 300) {
        refElement.getElementsByClassName('fill-height')[0].classList.remove('fill-width');
      } else {
        refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
      }
    };
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  #background {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
  }
}
#background .row {
  position: relative;
  background: #fff;
}
.vertical-align-middle {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
section {
  display: block;
}
#background .row .fill-height.fill-width {
  width: 100%;
}
#background .row .fill-height {
  background: #feac40;
  background-image: -webkit-radial-gradient(center center, circle cover, #f7484e, #f7484e);
}
@media screen and (min-width: 992px) {
  #background .fill-height {
    position: absolute;
    width: 40%;
  }
}
.fill-height {
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 10;
  transition: all .4s;
  transition-delay: 0s;
}
#background .row .col-right {
  min-height: 100vh;
}
@media screen and (min-width: 992px) {
  #background .col-right {
    width: 60%;
  }
}
@media screen and (min-width: 992px) {
  .col-right {
    left: 40%;
  }
}
.col-right {
  position: relative;
}
.padded {
  padding: 5rem 0 !important;
}
</style>
