<template>
  <section
    id="Contact"
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
            <p>
              If you're looking to expand your network or you want a kickass developer,
              feel free to contact me wherever you want.
            </p>
            <div class="level">
              <img src="../assets/logo_black.png" width="100">
              <h5>&nbsp;Florian Woelki</h5>
            </div>
            <p class="description">
              Software Developer
            </p>
            <span>
              <a href="mailto:florianwoelki@gmx.de">florianwoelki@gmx.de</a>
            </span>
            <v-space xlarge />
          </v-row>
          <v-row fluid>
            <v-col class="col-fluid" ignoreScreen>
              <v-link href="https://github.com/FlorianWoelki" blank>
                <span class="icon">
                  <i class="fab fa-github fa-lg"></i>
                </span>
              </v-link>
            </v-col>
            <v-col class="col-fluid" ignoreScreen>
              <v-link href="https://linkedin.com/in/florian-woelki/" blank>
                <span class="icon">
                  <i class="fab fa-linkedin fa-lg"></i>
                </span>
              </v-link>
            </v-col>
            <v-col class="col-fluid" ignoreScreen>
              <v-link href="https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A" blank>
                <span class="icon">
                  <i class="fab fa-youtube fa-lg"></i>
                </span>
              </v-link>
            </v-col>
            <v-col class="col-fluid" ignoreScreen>
              <v-link href="https://medium.com/@FlorianWoelki" blank>
                <span class="icon">
                  <i class="fab fa-medium fa-lg"></i>
                </span>
              </v-link>
            </v-col>
            <v-col class="col-fluid" ignoreScreen>
              <v-link href="https://anchor.fm/florian-woelki" blank>
                <span class="icon">
                  <i class="fas fa-podcast fa-lg"></i>
                </span>
              </v-link>
            </v-col>
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
      const refElement = document.getElementById('Contact');
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
#Contact .icon:hover {
  color: #374054;
}
#Contact .row .level {
  -webkit-box-pack: start;
  justify-content: flex-start;
}
@media screen and (min-width: 992px) {
  #Contact {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
  }
}
#Contact .row {
  position: relative;
}
#Contact .row .fill-height.fill-width {
  width: 100%;
}
#Contact .row .fill-height {
  background: #686de0;
  background-image: -webkit-radial-gradient(center center, circle cover, #e67e22, #e67e22);
}
@media screen and (min-width: 992px) {
  #Contact .fill-height {
    position: absolute;
    width: 40%;
  }
}
#Contact .row .col-right {
  min-height: 100vh;
}
@media screen and (min-width: 992px) {
  #Contact .col-right {
    width: 60%;
  }
}
</style>
