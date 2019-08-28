<template>
  <div class="row u-no-padding">
    <div
      class="fill-height fill-width"
      style="top: 0px; bottom: inherit;"
    >
      <div class="vertical-align-middle u-center">
        <div class="content u-text-center">
          <h3 class="white">Background</h3>
          <v-divider center short style="background-color:white;" />
        </div>
      </div>
    </div>

    <div
      class="col-right padded"
      style="background-color: #292929;"
    >
      <div class="content content-element">
        <p class="white light">
          Learning is the key to everything. Therefore, I love to learn new things
          in new areas, new programming languages or tools. In the past, I explored
          a lot of new techniques to create applications to javascript frameworks.
          I love creating new things and I am really open minded to new things.
        </p>

        <v-space />
        <p class="white light">
          Below are some frameworks or languages I enjoy using web development.
        </p>

        <h6 class="white text-center">Web Development</h6>
        <v-row center>
          <v-col c10>
            <HBarChart
              :labels="['HTML', 'CSS/SCSS', 'JavaScript', 'React.js', 'Vue.js']"
              :data="[6, 4, 6, 4, 8]"
              :height="250"
            />
          </v-col>
        </v-row>

        <v-space xlarge />
        <p class="white light">
          Below are some languages I enjoy prototyping ideas or creating software with it.
        </p>

        <h6 class="white text-center">General Development</h6>
        <v-row center>
          <v-col c10>
            <HBarChart
              :labels="['Python', 'Java', 'Swift', 'Go', 'Node.js']"
              :data="[8, 4, 7, 2, 5, 2]"
              :height="250"
            />
          </v-col>
        </v-row>

        <v-space xlarge />
        <p class="white light">
          Below are some tools I use to sketch out some ideas or new applications.
        </p>

        <h6 class="white text-center">Design</h6>
        <v-row center>
          <v-col c10>
            <HBarChart
              :labels="['Sketch', 'Gimp']"
              :data="[7, 4]"
              :height="250"
            />
          </v-col>
        </v-row>

        <v-space xlarge />
        <p class="white light">
          Below are some information about my artificial intelligence knowledge.
        </p>

        <h6 class="white text-center">Artificial Intelligence</h6>
        <v-row center>
          <v-col c10>
            <HBarChart
              :labels="[
                'Business',
                'ML',
                'DL',
                'RL',
                'NLP'
              ]"
              :data="[7, 6, 5, 2, 3]"
              :height="250"
            />
          </v-col>
        </v-row>

        <v-space xlarge />
        <p class="white light">
          Below are some other things you might want to know.
        </p>

        <h6 class="white text-center">Misc.</h6>
        <v-row center>
          <v-col c10>
            <HBarChart
              :labels="[
                'English',
                'German',
                'Math',
              ]"
              :data="[6, 8, 4]"
              :height="250"
            />
          </v-col>
        </v-row>

        <v-space xlarge />
        <p class="white light">
          Below are some other maybe useful stats about me.
        </p>

        <v-row class="stats">
          <v-col c4>
            <div class="white text-center">
              <p class="light">Repositories</p>
              <h3>31</h3>
            </div>
          </v-col>
          <v-col c4>
            <div class="white text-center">
              <p class="light">Coffees</p>
              <h3>729</h3>
            </div>
          </v-col>
          <v-col c4>
            <div class="white text-center">
              <p class="light">Organisations</p>
              <h3>2</h3>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import HBarChart from '@/components/HBarChart.vue';

export default {
  components: {
    HBarChart,
  },
  mounted() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (width >= 992) {
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || (document.documentElement
          || document.body.parentNode || document.body).scrollTop;
        const refElement = document.getElementById('Background');
        const elementOffset = refElement.offsetTop;
        if (scrollTop >= elementOffset - 300) {
          refElement.getElementsByClassName('fill-height')[0].classList.remove('fill-width');
        } else {
          refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
        }

        const lastElementOffset = refElement.getElementsByClassName('content-element')[0];

        if (scrollTop >= elementOffset + 64) {
          if (scrollTop - lastElementOffset.offsetHeight >= 1710) {
            refElement.getElementsByClassName('fill-height')[0].classList.remove('fixed');
            refElement.getElementsByClassName('fill-height')[0].setAttribute('style', 'top: inherit; bottom: 0px;');

            if (scrollTop - lastElementOffset.offsetHeight >= 1710 + 300) {
              refElement.getElementsByClassName('fill-height')[0].classList.add('fill-width');
            }
          } else {
            refElement.getElementsByClassName('fill-height')[0].classList.add('fixed');
            refElement.getElementsByClassName('fill-height')[0].setAttribute('style', 'top: 0px; bottom: inherit;');
          }
        } else {
          refElement.getElementsByClassName('fill-height')[0].classList.remove('fixed');
        }
      });
    }
  },
};
</script>

<style>
#Background .stats p,
#Background .stats h3 {
  margin: 0;
}
#Background {
  overflow: hidden;
}
#Background, #Background .row, #Background .row .col-right {
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
#Background .row .fill-height.fill-width {
  width: 100%;
}
#Background .row .fill-height {
  background: #686de0;
  background-image: -webkit-radial-gradient(center center, circle cover, #686de0, #686de0);
}
@media screen and (min-width: 992px) {
  #Background .fill-height {
    position: absolute;
    width: 40%;
  }
  #Background .fill-height.fixed {
    position: fixed;
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
#Background .row .col-right {
  min-height: 100vh;
}
@media screen and (min-width: 992px) {
  #Background .col-right {
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
  margin-top: 0 !important;
}
.padded {
  padding: 5rem 0 !important;
}
</style>
