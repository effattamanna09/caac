<template>
  <!-- start top bar -->
  <v-row>
    <v-card>
      <v-toolbar flat class="mainHeader">
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text><router-link to="/">Country</router-link></v-btn>

          <v-btn text><router-link to="/">Need more funding</router-link></v-btn>
          <v-btn text><router-link to="/">Fully-funded</router-link></v-btn>
          <v-btn text><router-link to="/">Topic</router-link></v-btn>
        </v-toolbar-items>
        <div class="hidden-sm-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>
            <v-list class="responsiveMenu">
              <v-list-item>
                <v-list-item-title
                  ><router-link to="/">Country</router-link></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link to="/">Need more funding</router-link></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link to="/">Fully-funded</router-link></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link to="/">Topic</router-link></v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar>
    </v-card>
  </v-row>

  <!-- From end -->
  <!-- End navigation -->
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    drawer: null,
  }),
};
</script>