<template>
  <v-footer
    title="Florian Woelki"
  >
    <h4 class="white light">Make things happen.</h4>
    <v-row style="padding-bottom: 0px;">
      Copyright 2019 © Florian Woelki
    </v-row>
    <v-row style="padding-top: 0px;">
      Made with
      <i class="fa fa-heart pulse"></i>
      in <strong>Berlin</strong>
    </v-row>
  </v-footer>
</template>

<style>
footer {
  margin-top: 0px;
}

footer .row {
  color: gray;
}

footer .fa {
  color: #e90606;
  margin: 0 3px;
  animation: pound 0.35s infinite alternate;
  -webkit-animation: pound 0.35s infinite alternate;
  vertical-align: baseline;
  font-size: inherit;
}
</style>
