<template>
  <div class="footer">
 <v-divider class="footer-divider"></v-divider>
    <v-footer dark padless>
      <v-card class="black white--text flex" width="1920px" flat>
        <v-col class="mt-10 mr-4" lg="12">
          <v-row justify="center">
            <v-col class="mr-10" lg="5" cols="10" md="6">
              <h1>LOGO</h1>
              <v-divider class="footer-driver-1"></v-divider>
              <p class="mt-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem animi
                voluptatem, nostrum facilis ab nam quasi officiis tempora officia eum?
              </p>

              <v-btn class="ma-1" outlined color="white"
                ><span class="capitalize"> Address: Drop your address here.</span>
              </v-btn>
              <v-btn class="ma-1" outlined color="white"
                ><span class="capitalize"> Email: Drop your address here.</span>
              </v-btn>
              <v-btn class="ma-1" outlined color="white"
                ><span class="capitalize"> Phone: Drop your address here.</span>
              </v-btn>
            </v-col>
            <v-col class="vertical" lg="1"></v-col>
            <v-col class="ml-10" lg="5" cols="12" md="6">
              <h1>Usefull Link</h1>
              <v-divider class="footer-driver-2"></v-divider>
              <v-row class="mt-5">
                <v-col lg="4">
                 <p>Home</p>
                 <p>About Us</p>
                 <p>Gallery</p>
                </v-col>
                 <v-col lg="4">
                 <p>Home</p>
                 <p>About Us</p>
                 <p>Gallery</p>
                </v-col>
               
              </v-row>
              <v-text-field
                label="Email"
                placeholder="Enter your email here"
                outlined
              ></v-text-field>

              <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>
