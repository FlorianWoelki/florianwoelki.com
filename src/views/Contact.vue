<template>
  <section
    id="contact"
    class="clearfix"
  >
    <div class="row no-padding">
      <div class="fill-height fill-width">
        <div class="vertical-align-middle">
          <div class="content text-center">
            <h3 class="white">Contact</h3>
            <v-divider short class="center" />
          </div>
        </div>
      </div>
      <div class="col-right padded">
        <v-container>
          <v-row>
            <h1>test</h1>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || (document.documentElement
        || document.body.parentNode || document.body).scrollTop;
      const refElement = document.getElementById('contact');
      const elementOffset = refElement.offsetTop;
      if (scrollTop >= elementOffset - 300) {
        refElement.getElementsByClassName('fill-height')[0].classList.remove('fill-width');
      } else {
        refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
      }
    });
  },
};
</script>

<style>
@media screen and (min-width: 992px) {
  #contact {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
  }
}
#contact .row {
  position: relative;
}
#contact .row .fill-height.fill-width {
  width: 100%;
}
#contact .row .fill-height {
  background: #686de0;
  background-image: -webkit-radial-gradient(center center, circle cover, #e67e22, #e67e22);
}
@media screen and (min-width: 992px) {
  #contact .fill-height {
    position: absolute;
    width: 40%;
  }
}
#contact .row .col-right {
  min-height: 100vh;
}
@media screen and (min-width: 992px) {
  #contact .col-right {
    width: 60%;
  }
}
</style>
