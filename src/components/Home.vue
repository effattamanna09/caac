<template>
  <base-layout>
    <!-- Start Slider -->
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <h1>hello</h1></v-carousel-item
      >
    </v-carousel>
    <!-- End Slider -->

    <!-- start about us -->

    <div class="sci-bg">
      <div class="container">
        <div class="about">
          <v-row>
            <v-col lg="6" cols="12" md="12">
              <v-row justify="center">
                <v-col lg="3" cols="12" md="12">
                  <a href="#">
                    <img
                      class="mr-3"
                      :src="require('../assets/images/about/about1.png')"
                      height="200" /></a></v-col
              ></v-row>
              <v-row justify="center">
                <v-col lg="3" cols="12" md="12">
                  <a href="#">
                    <img
                      class="mr-3"
                      :src="require('../assets/images/about/about1.png')"
                      height="200" /></a></v-col
              ></v-row>
            </v-col>
            <v-col lg="4" cols="12" md="12">
              <h1>About Us</h1>
              <v-divider class="divider"></v-divider>
              <br />
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum may be used as a
                placeholder before the final copy is available. In publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to demonstrate
              </p>
              <v-btn class="mt-6 moreabout" outlined small> More About </v-btn>
              <v-col class="aboutBtn" cols="12">
                <v-btn class="mr-5 pa-4" x-large outlined color="#009CA6">
                  Our Mission
                </v-btn>
                <v-btn class="pa-4" x-large outlined color="#009CA6"> Our Vision </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <!-- End about us -->

    <!-- Start Latest news -->
    <div class="sci-bg sci-bg-2">
      <div class="container">
        <v-row>
          <div class="news">
            <h1>Latest News</h1>
            <v-divider class="divider"></v-divider><br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available. In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to demonstrate
            </p>
          </div>
        </v-row>
      </div>
    </div>
    <!-- End Latest news -->

    <!-- Start Our projects -->

    <div class="container">
      <v-row>
        <div class="project">
          <h1>Our Project</h1>
          <v-divider class="divider"></v-divider><br />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly
            used to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is available. In publishing and graphic design, Lorem ipsum is
            a placeholder text commonly used to demonstrate
          </p>

          <v-col lg="12" cols="12" md="12">
            <v-card class="mx-auto" max-width="100%" outlined>
              <v-row>
                <v-col lg="4" cols="6" md="6">
                 <a href="#">
                    <img
                      class="mr-3"
                      :src="require('../assets/images/about/about1.png')"
                      height="400" /></a>
                </v-col>
                <v-col lg="8" cols="6" md="6">
                  <v-card-text>
                    <div>Word of the Day</div>

                    <p>adjective</p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </div>

    <!-- End Our projects -->

    <!-- Start our team -->
    <div class="container">
      <v-row>
        <div class="team">
          <h1>Our Team</h1>
          <v-divider class="divider"></v-divider><br />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly
            used to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is available. In publishing and graphic design, Lorem ipsum is
            a placeholder text commonly used to demonstrate
          </p>
        </div>
      </v-row>
    </div>
    <!-- End our team -->

    <!-- Start Gallery -->
    <div class="sci-bg sci-bg-1">
      <div class="container">
        <v-row>
          <div class="gallery">
            <h1>Gallery</h1>
            <v-divider class="divider"></v-divider><br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available. In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to demonstrate
            </p>
          </div>
        </v-row>
      </div>
    </div>
    <!-- End Gallery -->

    <!-- Start Partners -->
    <div class="container">
      <v-row>
        <div class="partner">
          <h1>Partners</h1>
          <v-divider class="divider"></v-divider><br />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly
            used to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is available. In publishing and graphic design, Lorem ipsum is
            a placeholder text commonly used to demonstrate
          </p>
        </div>
      </v-row>
    </div>
    <!-- End Partners -->
  </base-layout>
</template>

<script>
import BaseLayout from "../App.vue";
export default {
  name: "Home",
  components: {
    BaseLayout,
  },

  data: () => ({
    items: [
      {
        src: "require('../assets/images/home_slider.png')",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
    ],
  }),
};
</script>
