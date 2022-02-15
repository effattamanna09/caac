<template>
  <base-layout>
    <!-- start about us -->
    <div class="container-fluid">
      <v-img :src="require('../assets/images/home_slider.png')" height="450" />
      <v-divider class="footer-divider"></v-divider>
      <social />
      <div class="container about mt-15">
        <v-row>
          <v-col lg="12" cols="12" md="12">
            <v-row>
              <v-col lg="8" cols="8" md="8">
                <h1>About Us</h1>
                <v-divider class="divider"></v-divider>
                <br />
              </v-col>
              <v-col lg="4" cols="8" md="8">
                <v-list>
                  <v-btn elevation="0" class="" outlined rounded text
                    ><v-icon> mdi-magnify</v-icon
                    ><v-text-field class="search-btn-header"></v-text-field
                  ></v-btn>
                </v-list>
              </v-col>
            </v-row>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available. In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to demonstrate
            </p>
            <v-col class="aboutBtn" cols="12">
              <v-hover v-slot="{ hover }">
                <v-btn
                  class="mr-5 pa-4 white--text about-btn"
                  x-large
                  :style="{ 'background-color': hover ? 'red' : '#009CA6' }"
                  >Our Mission</v-btn
                >
              </v-hover>
              <v-btn class="pa-4 white--text about-btn" x-large color="#009CA6">
                Our Vision
              </v-btn>
            </v-col>
          </v-col>
          <v-col>
            <h3>All Comments (0)</h3>
            <br />
            <h3>Leave a Reply</h3>
            <br />
            <v-text-field outlined></v-text-field>
          </v-col>
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
  name: "Home",
  components: {
    BaseLayout,
    Social,
  },

  data: () => ({}),
};
</script>
