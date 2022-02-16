<template>
  <base-layout>
    <!-- start about us -->
    <div class="container-fluid">
      <v-img :src="require('../assets/images/home_slider.png')" height="450" />
      <v-divider class="footer-divider"></v-divider>
      <social />
      <div class="container contact mt-15">
        <v-row justify="center">
          <v-card class="" elevation="1" outlined width="80%">
         

          </v-card>
        </v-row>
      </div>
    </div>

    <!-- End about us -->
  </base-layout>
</template>

<script>
import BaseLayout from "../App.vue";
import Social from "./social.vue";
export default {
  name: "contact",
  components: {
    BaseLayout,
    Social,
  },

  data: () => ({}),
};
</script>
