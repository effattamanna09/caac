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
    <div class="sidebar">
      <div class="social facebook">
        <a href=" https://www.facebook.com " target="_blank">
          <p>Like on Facebook <i class="fa fa-facebook"></i></p>
        </a>
      </div>
      <div class="social twitter">
        <a href=" https://www.twitter.com " target="_blank">
          <p>Follow on Twitter<i class="fa fa-twitter"></i></p>
        </a>
      </div>
      <div class="social google">
        <a href=" https://www.plus.google.com " target="_blank">
          <p>Google+<i class="fa fa-google-plus"></i></p>
        </a>
      </div>
    </div>
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
          <v-card
            class="mx-auto mt-5 team-details-card"
            max-width="300"
            v-for="n in 6"
            :key="n"
          >
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
      </v-row>
    </div>
    <div class="red_bg" style="float: right">
      <div class="container">
        <v-col md="2"></v-col>
        <v-col md="10">
          <v-row>
            <v-col md="12" col="12">
              <v-slide-group show-arrows>
                <v-slide-item v-for="n in 10" :key="n">
                  <v-card class="mr-10">
                    <a href="#">
                      <v-img
                        class=""
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
          <v-row justify="center" class="ma-5">
            <v-btn outlined small> More About </v-btn>
          </v-row>
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
<style scoped>
a {
  text-decoration: none;
  vertical-align: middle;
  text-align: center;
  line-height: 3;
}

p {
  margin: 0px;
}

.sidebar {
  height: auto;
  width: 0px;
  position: fixed;
  text-align: center;
  top: 35vh;
  padding: 10px;
}

p i {
  left: 30px;
  position: relative;
  vertical-align: middle;
  text-align: center;
  font-size: 24px;
}

.social {
  margin-left: -200px;
  width: 230px;
  padding: 0;
  display: inline-table;
  height: 0px;
  background-color: rgba(128, 128, 128, 0.73);
  -moz-transition-property: margin-left;
  -moz-transition-duration: 0.2s;
  -moz-transition-delay: 0.2s;
  -ms-transition-property: margin-left;
  -ms-transition-duration: 0.2s;
  -ms-transition-delay: 0.2s;
  -o-transition-property: margin-left;
  -o-transition-duration: 0.2s;
  -o-transition-delay: 0.2s;
  -webkit-transition-property: margin-left;
  -webkit-transition-duration: 0.2s;
  -webkit-transition-delay: 0.2s;
  box-shadow: 0px 0px 6px 0px #3e3d3d;
  cursor: pointer;
}

.social:hover {
  margin-left: -30px;
  width: 230px;
}

.facebook {
  background-color: #3b5998;
}

.twitter {
  background-color: #4099ff;
}

.google {
  background-color: #dd4b39;
}

.linkedin p i {
  left: 20px;
}

.google p i {
  left: 35px;
}

.youtube p i {
  left: 18px;
}

.youtube:hover {
  background-color: #e52d27;
}

.linkedin:hover {
  background-color: #0976b4;
}
</style>
