<template>
  <base-layout>
    <!-- Start Slider -->
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <div class="banner-slider">
         
          <h1>
            ARMED CONFLICT <br />
            CHILDREN<br />
          </h1>
          <h2>in Africa</h2>
          <v-divider class="footer-driver-1"></v-divider>
          <p>
            Reference site about Lorem Ipsum, giving information <br> on its origins, as well
            as a random Lipsum generator.
          </p>
          <v-col lg="4" cols="6">
           <v-divider class="footer-driver-2"></v-divider>

          </v-col>
        </div>
      </v-carousel-item>
     
    </v-carousel>
     <v-divider class="red-divider"></v-divider>
    
    <!-- End Slider -->

    <!-- start about us -->

    <div class="sci-bg">
      <div class="container">
        <div class="about mt-15">
          <v-row>
            <v-col lg="6" cols="12" md="12">
              <v-row>
                <v-col lg="3" cols="12" md="12">
                  <a href="#">
                    <img
                      :src="require('../assets/images/about/about1.png')"
                      height="200"
                      width="400" /></a></v-col
              ></v-row>
             
            </v-col>
            <v-col lg="6" cols="12" md="12">
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
    <div class="sci-bg sci-bg-2 mt-15">
      <div class="container">
        <v-row>
          <v-col lg="12" cols="12" md="12">
            <div class="news">
              <h1>Latest News</h1>
              <v-divider class="divider"></v-divider><br />
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum may be used as a
                placeholder before the final copy is available. In publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to demonstrate
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- End Latest news -->

    <!-- Start Our projects -->

    <div class="container">
      <div class="sci-bg sci-bg-1">
        <v-row>
          <v-col lg="12" cols="12" md="12">
            <div class="project mt-15">
              <h1>Our Project</h1>
              <v-divider class="divider"></v-divider><br />
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum may be used as a
                placeholder before the final copy is available. In publishing and graphic
                design, Lorem ipsum is a placeholder text commonly used to demonstrate
              </p>

              <v-card
                v-for="n in 3"
                :key="n"
                class="mx-auto mt-10 card1"
                max-width="100%"
                outlined
              >
                <v-row>
                  <v-col lg="4" cols="12" md="6">
                    <a href="#">
                      <v-img
                        class="mt-4 ml-4"
                        :src="require('../assets/images/about/about2.png')"
                        height="250"
                    /></a>
                  </v-col>
                  <v-col lg="8" cols="12" md="6">
                    <v-card-text>
                      <v-btn class="ma-1 white--text" color="#009CA6">Project Name</v-btn>

                      <p class="mt-10">
                        In publishing and graphic design, Lorem ipsum is a placeholder
                        text commonly used to ipsumIn publishing and graphic design, Lorem
                        ipsum isIn publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to ipsum In publishing and graphic
                        design, Lorem ipsum is a placeholder text commonly used to ipsum
                      </p>
                      <v-btn class="mt-6 ma-2 moreabout" outlined small>
                        Learn More
                      </v-btn>
                    </v-card-text>
                  </v-col>
                  <v-row class="borderclass"> </v-row>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- End Our projects -->

    <!-- Start our team -->
    <div class="container">
      <v-row>
        <v-col lg="12" cols="12" md="12">
          <div class="team mt-15">
            <h1>Our Team</h1>
            <v-divider class="divider"></v-divider><br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available. In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to demonstrate
            </p>
          </div>
        </v-col>

        <div class="our-team-card">
          <v-col lg="12" col="12">
            <v-sheet color="#D1CCBD" max-width="950" height="400px">
              <v-slide-group show-arrows>
                <v-slide-item v-for="n in 15" :key="n">
                  <v-card class="mx-auto mr-3 team-details-card" max-width="300">
                    <a href="#">
                      <v-img
                        class="mt-4"
                        :src="require('../assets/images/latest-news/news3.png')"
                        height="250"
                    /></a>

                    <div class="card-details">
                      <v-card-title> Name </v-card-title>

                      <v-card-subtitle> Designation </v-card-subtitle>
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </div>
      </v-row>
    </div>
    <!-- End our team -->

    <!-- Start Gallery -->
    <div class="sci-bg sci-bg-1 mt-10">
      <div class="container">
        <v-row>
          <v-col lg="12" cols="12" md="12">
            <div class="gallery mt-15">
              <v-row>
                <v-col lg="8" cols="12" md="12">
                  <h1>Gallery</h1>
                  <v-divider class="divider"></v-divider><br />
                  <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to demonstrate the visual form of a document or a
                    typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available. In
                    publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to demonstrate
                  </p></v-col
                >
                <v-col lg="4" cols="12" md="12">
                  <a href="#">
                    <v-img
                      class="mt-4 ml-4"
                      :src="require('../assets/images/latest-news/news3.png')"
                      height="250" /></a
                ></v-col>
              </v-row>
            </div>
          </v-col>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news1.png')"
              height="250"
          /></a>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news2.png')"
              height="250"
          /></a>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news4.png')"
              height="250"
          /></a>
        </v-row>
        <v-divider class="red-divider"></v-divider>
      </div>
    </div>
    <!-- End Gallery -->

    <!-- Start Partners -->
    <div class="container">
      <v-row>
        <v-col lg="12" cols="12" md="12">
          <div class="partner mt-15">
            <h1>Partners</h1>
            <v-divider class="divider"></v-divider><br />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface without
              relying on meaningful content. Lorem ipsum may be used as a placeholder
              before the final copy is available. In publishing and graphic design, Lorem
              ipsum is a placeholder text commonly used to demonstrate
            </p>
            <v-sheet class="mx-auto mt-10" max-width="100%">
              <v-slide-group>
                <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
                  <v-btn :input-value="active" depressed @click="toggle">
                    <a href="#">
                      <img
                        class="mr-3"
                        :src="require('../assets/images/partner.png')"
                        height="50"
                    /></a>
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </v-col>
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
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>
