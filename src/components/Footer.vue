<template>
  <v-footer
    title="Florian Woelki"
  >
    <h4 class="white light">Make things happen.</h4>
    <p>
      Copyright 2019 © Florian Woelki
      <span class="spacing">
        Made with
        <i class="fa fa-heart pulse"></i>
        in <strong>Berlin</strong>
      </span>
    </p>
    <p>
      <v-link c class="light">Impressum</v-link>
      <span class="spacing">
        <v-link c class="light">Privacy</v-link>
      </span>
    </p>
  </v-footer>
</template>

<style>
footer {
  margin-top: 0px;
}

footer .spacing {
  margin-left: 1rem;
}

footer p .fa {
  color: #e90606;
  margin: 0 3px;
  animation: pound 0.35s infinite alternate;
  -webkit-animation: pound 0.35s infinite alternate;
  vertical-align: baseline;
  font-size: inherit;
}
</style>
