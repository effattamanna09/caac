<template>
  <div>
    <!-- start top bar -->

    <v-app-bar color="#DA291C" dense height="20px">
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- End top bar -->
    <!-- start navigation -->

    <v-app-bar color="#D1CCBD" elevation="0">
      <v-toolbar-items class="hidden-xs-only"
        ><div class="desktop-header">
          <v-list class="d-flex align-center header" color="#D1CCBD">
            <v-list-item v-for="link in links" :key="link.text">
              <v-list-item-title class="font-class-name"
                >{{ link.text }}
              </v-list-item-title>
            </v-list-item>

            <v-btn elevation="0" class="search-btn"
              ><v-icon> mdi-magnify</v-icon
              ><v-text-field class="search-btn-header" hide-details></v-text-field
            ></v-btn>
          </v-list>
        </div>
        <v-app-bar-nav-icon
          v-model="drawer"
          @click.stop="drawer = !drawer"
          class="hidden"
        ></v-app-bar-nav-icon
      ></v-toolbar-items>

      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>

          <v-list class="header" color="#D1CCBD">
            <v-list-item v-for="link in links" :key="link.text">
              <v-list-item-title class="font-class-name"
                >{{ link.text }}
              </v-list-item-title>
            </v-list-item>

            <v-btn
              ><v-icon> mdi-magnify</v-icon
              ><v-text-field class="search-btn-header" hide-details></v-text-field
            ></v-btn>
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

    links: [
      { text: "Home", route: "/" },
      {
        text: "About Us",
        route: "/",
      },
      { text: "Project", route: "/" },
      { text: "Community", route: "/" },
      { text: "Resources", route: "/" },
      { text: "Gallery", route: "/" },
      { text: "Contact", route: "/" },
    ],
  }),
};
</script>
