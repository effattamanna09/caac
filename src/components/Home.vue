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
            Reference site about Lorem Ipsum, giving information <br />
            on its origins, as well as a random Lipsum generator.
          </p>
          <v-col lg="4" cols="6">
            <v-divider class="footer-driver-2"></v-divider>
          </v-col>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-divider class="red-divider"></v-divider>

    <!-- End Slider -->
    <social />

    <!-- Start Latest news -->

    <div class="container">
      <v-row>
        <v-col lg="12" cols="12" md="12">
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
        </v-col></v-row
      >
    </div>
    <div class="sci-bg sci-bg-2 mt-15">
      <div class="container">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="250" :src="require('../assets/images/news1.png')"></v-img>
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
            <div>
              Small plates, salads & sandwfiches - an intimate setting with 12 indoor
              seats plus patio seating.
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title>Tonight's availability</v-card-title>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column>
              <v-btn>submit</v-btn>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <!-- End Latest news -->

    <!-- Start Our Workshops -->

    <div class="container">
      <div class="project mt-15">
        <h1>Our Workshops</h1>
        <v-divider class="divider"></v-divider><br />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly
          used to demonstrate the visual form of a document or a typeface without relying
          on meaningful content. Lorem ipsum may be used as a placeholder before the final
          copy is available. In publishing and graphic design, Lorem ipsum is a
          placeholder text commonly used to demonstrate
        </p>
      </div>
    </div>
    <div class="sci-bg sci-bg-2 mt-15">
      <div class="container">
        <v-row v-for="(workshop, index) in 3" :key="index">
          <v-card v-if="index % 2 === 0" class="mx-auto mt-10" max-width="100%" outlined>
            <v-row>
              <v-col lg="4" cols="12" md="6">
                <a href="#">
                  <v-img
                    class="mt-4 ml-4"
                    :src="require('../assets/images/workshop1.png')"
                /></a>
              </v-col>
              <v-col lg="8" cols="12" md="6">
                <v-card-text
                  ><br />
                  <h2>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsumIn publishing and graphic design, Lorem ipsum
                    isIn publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsum In publishing and graphic design, Lorem ipsum
                    is a placeholder text commonly used to ipsum
                  </h2>
                  <br />
                  <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsumIn publishing and graphic design, Lorem ipsum
                    isIn publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsum In publishing and graphic design, Lorem ipsum
                    is a placeholder text commonly used to ipsum
                  </p>
                  <v-btn class="mt-6 ma-2 moreabout" outlined small> Read More </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-else class="mx-auto mt-10" max-width="100%" outlined>
            <v-row>
              <v-col lg="8" cols="12" md="6">
                <v-card-text
                  ><br />
                  <h2>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsumIn publishing and graphic design, Lorem ipsum
                    isIn publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsum In publishing and graphic design, Lorem ipsum
                    is a placeholder text commonly used to ipsum
                  </h2>
                  <br />
                  <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsumIn publishing and graphic design, Lorem ipsum
                    isIn publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to ipsum In publishing and graphic design, Lorem ipsum
                    is a placeholder text commonly used to ipsum
                  </p>
                  <v-btn class="mt-6 ma-2 moreabout" outlined small> Read More </v-btn>
                </v-card-text>
              </v-col>
              <v-col lg="4" cols="12" md="6">
                <a href="#">
                  <v-img
                    class="mt-4 ml-4"
                    :src="require('../assets/images/workshop2.png')"
                /></a>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-row justify="center" class="ma-5 mt-10">
          <v-btn outlined large> All News </v-btn>
        </v-row>
      </div>
    </div>

    <!-- End Our Workshops -->

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
      </v-row>
    </div>
    <div class="red_bg">
      <div class="container">
        <!-- <v-col md="2"></v-col> -->
        <v-col md="12">
          <v-row>
            <v-col md="12" col="12">
              <v-slide-group show-arrows>
                <v-slide-item v-for="n in 10" :key="n">
                  <v-card class="mr-10" elevation="0">
                    <a href="#">
                      <v-img
                        :src="require('../assets/images/our-team1.png')"
                        height="250"
                        width="250"
                    /></a>

                    <div class="card-details">
                      <v-card-title> Name </v-card-title>
                    </div>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-col>
          </v-row>
        </v-col>
      </div>
    </div>
    <div style="clear: both"></div>
    <!-- End our team -->

    <!-- Start Gallery -->
    <div class="sci-bg sci-bg-2 mt-15">
      <div class="container">
        <v-row>
          <v-col lg="12" cols="12" md="12">
            <div class="gallery mt-15">
              <v-row>
                <v-col lg="12" cols="12" md="12">
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
              </v-row>
            </div>
          </v-col>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news1.png')"
          /></a>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news2.png')"
          /></a>
          <a href="#">
            <v-img
              class="mt-4 ml-4"
              :src="require('../assets/images/latest-news/news4.png')"
          /></a>
        </v-row>
      </div>
    </div>
    <v-divider class="red-divider"></v-divider>
    <v-row justify="center" class="ma-5">
      <v-btn outlined small>See More </v-btn>
    </v-row>
    <!-- End Gallery -->

    <!-- start events -->
    <div class="container">
      <v-row>
        <v-col lg="12" cols="12" md="12">
          <div class="events mt-15">
            <h1>Events</h1>
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
      </v-row>
      <v-row>
        <v-hover v-for="n in 6" :key="n">
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto ma-6" max-width="500">
              <v-img
                :src="require('../assets/images/events1.png')"
                width="800"
                height="600"
              ></v-img>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                    aliquid culpa iure, quaerat repudiandae accusantium in quod esse hic
                    provident.
                  </span>
                  <v-btn class="mt-2 moreabout" outlined small> More Info </v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-row>
    </div>
    <!-- End events -->

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
import Social from "./social.vue";
export default {
  name: "Home",
  components: {
    BaseLayout,
    Social,
  },

  data: () => ({
    overlay: false,
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
