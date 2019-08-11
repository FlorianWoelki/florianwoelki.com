<template>
  <section
    id="background"
    class="clearfix"
  >
    <div class="row no-padding">
      <div
        class="fill-height fill-width"
        style="top: 0px; bottom: inherit;"
      >
        <div class="vertical-align-middle center">
          <div class="content text-center">
            <h3 class="white">Background</h3>
            <div class="divider divider-short center"></div>
          </div>
        </div>
      </div>

      <div
        class="col-right padded"
        style="background-color: #292929;"
      >
        <div class="content content-element">
          <p class="white light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptate, nesciunt! Neque, quidem. Nisi, officia.
            Perferendis dolore laborum corporis voluptatum reprehenderit
            neque quidem quaerat, ducimus veritatis quos? Ratione eum hic debitis.
          </p>

          <v-space />
          <p class="white light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <h6 class="white text-center">Web Development</h6>
          <v-row center>
            <v-col c10>
              <HBarChart
                :labels="['Python', 'Java', 'Swift', 'JavaScript']"
                :data="[8, 5, 6, 8]"
                :height="250"
              />
            </v-col>
          </v-row>

          <v-space />
          <p class="white light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <h6 class="white text-center">General Development</h6>
          <v-row center>
            <v-col c10>
              <HBarChart
                :labels="['Python', 'Java', 'Swift', 'JavaScript']"
                :data="[8, 5, 6, 8]"
                :height="250"
              />
            </v-col>
          </v-row>

          <v-space />
          <p class="white light">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <h6 class="white text-center">Design</h6>
          <v-row center>
            <v-col c10>
              <HBarChart
                :labels="['Python', 'Java', 'Swift', 'JavaScript']"
                :data="[8, 5, 6, 8]"
                :height="250"
              />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HBarChart from '@/components/HBarChart.vue';

export default {
  components: {
    HBarChart,
  },
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

      const lastElementOffset = refElement.getElementsByClassName('content-element')[0];

      if (scrollTop >= elementOffset) {
        // scrollTop - lastElementOffset.offsetHeight => 1278 max height
        if (scrollTop - lastElementOffset.offsetHeight >= 1278) {
          refElement.getElementsByClassName('fill-height')[0].classList.remove('fixed');
          refElement.getElementsByClassName('fill-height')[0].setAttribute('style', 'top: inherit; bottom: 0px;');

          if (scrollTop - lastElementOffset.offsetHeight >= 1278 + 300) {
            refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
          }
        } else {
          refElement.getElementsByClassName('fill-height')[0].classList.add('fixed');
          refElement.getElementsByClassName('fill-height')[0].setAttribute('style', 'top: 0px; bottom: inherit;');
        }
      } else {
        refElement.getElementsByClassName('fill-height')[0].classList.remove('fixed');
      }
    };
  },
};
</script>

<style>
/*
@media screen and (min-width: 992px) {
  #background {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
  }
}
*/
#background {
  overflow: hidden;
}
#background .fill-height.fixed {
  position: fixed;
}
#background, #background .row, #background .row .col-right {
  position: relative;
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
  background: #686de0;
  background-image: -webkit-radial-gradient(center center, circle cover, #686de0, #686de0);
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
