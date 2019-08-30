<template>
  <div class="row u-no-padding">
    <div class="fill-height fill-width">
      <div class="vertical-align-middle">
        <div class="content u-text-center">
          <h1 class="white">Contact</h1>
          <v-divider center short style="background-color:white;" />
        </div>
      </div>
    </div>
    <div class="col-right padded">
      <v-container>
        <v-row>
          <v-col>
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
          </v-col>
        </v-row>
        <v-row>
          <ContactIcon
            v-for="contactIcon in contactIcons"
            :key="contactIcon.href"
            :href="contactIcon.href"
            :iconClass="contactIcon.icon"
          />
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import ContactIcon from '@/components/ContactIcon.vue';

export default {
  components: {
    ContactIcon,
  },

  data() {
    return {
      contactIcons: [
        { href: 'https://github.com/FlorianWoelki', icon: 'fab fa-github' },
        { href: 'https://linkedin.com/in/florian-woelki/', icon: 'fab fa-linkedin' },
        { href: 'https://www.youtube.com/channel/UC18qytfIhR9cNEjUcgGLl3A', icon: 'fab fa-youtube' },
        { href: 'https://medium.com/@FlorianWoelki', icon: 'fab fa-medium' },
        { href: 'https://anchor.fm/florian-woelki', icon: 'fas fa-podcast' },
      ],
    };
  },

  mounted() {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    if (width >= 992) {
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
    }
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
