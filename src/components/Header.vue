<template>
  <div>
    <!-- start top bar -->

    <v-app-bar color="#DA291C" dense height="20px">
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- End top bar -->
    <!-- start navigation -->
    <div>
      <v-app-bar color="#D1CCBD" elevation="0">
        <v-app-bar-nav-icon
          v-model="drawer"
          @click.stop="drawer = !drawer"
          class="hidden"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-list class="d-flex align-center header" color="#D1CCBD">
          <v-list-item v-for="link in links" :key="link.text">
            <v-list-item-title class="font-class-name"
              >{{ link.text }}
            </v-list-item-title>
          </v-list-item>

          <v-btn
            ><v-icon> mdi-magnify</v-icon><v-text-field hide-details></v-text-field
            ></v-btn
          >
        </v-list>
      </v-app-bar>
    </div>
    <!-- End navigation -->
  </div>
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
        active: true,
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
