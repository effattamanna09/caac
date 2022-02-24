<template>
  <div>
    <!-- start top bar -->
    <v-app-bar color="#DA291C" height="20px" elevation="0"> </v-app-bar>

    <!-- End top bar -->
    <!-- start navigation -->
    <!-- Desktop -->

    <v-app-bar color="#FFFFFF" elevation="1">
      <v-toolbar-items class="hidden-xs-only">
        <a href="#">
          <v-img
            class="ml-10 mt-2"
            :src="require('../assets/images/savelogo.png')"
            height="50px"
            width="200px"
        /></a>
        <div class="desktop-header">
          <v-list class="d-flex align-center header" color="#FFFFFF">
            <v-list-item v-for="link in links" :key="link.text" class="header-padding">
              <v-btn v-bind="attrs" v-on="on" text elevation="0">
                <v-list-item-title
                  >{{ link.text }}
                </v-list-item-title>
                </v-btn>
            </v-list-item>
            <v-switch v-model="switch1" inset></v-switch>
            <!-- <v-btn elevation="0" class="search-btn"
              ><v-icon> mdi-magnify</v-icon
              ><v-text-field class="search-btn-header" hide-details></v-text-field
            ></v-btn> -->
          </v-list>
        </div>
        <v-app-bar-nav-icon
          v-model="drawer"
          @click.stop="drawer = !drawer"
          class="hidden"
        ></v-app-bar-nav-icon
      ></v-toolbar-items>
      <!-- mobile start -->
      <div class="hidden-sm-and-up">
        <v-menu offset-y content-class="mobile-menu">
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>

          <v-list class="header" color="#FFFFFF">
            <v-list-item v-for="link in links" :key="link.text">
              <v-list-item-title>{{ link.text }} </v-list-item-title>
            </v-list-item>

            <!-- <v-btn
              ><v-icon> mdi-magnify</v-icon
              ><v-text-field class="search-btn-header" hide-details></v-text-field
            ></v-btn> -->
            <a href="#">
              <v-img
                class="ma-3"
                :src="require('../assets/images/savelogo.png')"
                height="50px"
                width="120px"
            /></a>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
  <!-- End navigation -->
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    drawer: null,
    switch1: true,
    links: [
      { text: "Home", route: "/" },
      { text: "About Us", route: "/" },
      { text: "Project", route: "/" },
      { text: "Event", route: "/" },
      { text: "Gallery", route: "/" },
      { text: "Document", route: "/" },
      { text: "Board", route: "/" },
      { text: "Contact", route: "/" },
    ],
  }),
};
</script>
