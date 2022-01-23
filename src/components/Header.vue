<template>
  <div>
    <!-- start top bar -->
    <v-app-bar color="#DA291C" dense height="71px">
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- End top bar -->
    <!-- start navigation -->
    <div>
      <v-app-bar color="#707070" elevation="0">
        <v-toolbar-title></v-toolbar-title>

        <v-spacer></v-spacer>
        <v-list class="d-flex align-center header" color="#707070">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title class="font-class-name"
              >{{ link.text }}
            </v-list-item-title>
          </v-list-item>
           <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden"></v-app-bar-nav-icon>
      <v-btn
        ><v-text-field hide-details></v-text-field><v-icon> mdi-magnify</v-icon></v-btn
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
