<template>
  <v-container>
    <!-- side bar start -->
    <v-navigation-drawer app hide-overlay left elevation="0" v-model="drawer">
      <div class="pa-1 text-no-wrap rounded-xl elevation-5 sidebar">
        <v-list-item link href="#">
          
        </v-list-item>

        <v-list-item-content>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title class="font-class-name"
              >{{ link.text }}

              <v-list-item
                class="child"
                v-for="children in link.children"
                :key="children.text"
                router
                :to="children.route"
              >
                {{ children.text }}
              </v-list-item>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-content>

       
      </div>
    </v-navigation-drawer>
    <!-- side bar end -->

    <!-- top bar start -->
    <v-app-bar app color="white" elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden"></v-app-bar-nav-icon>
      <v-btn class="navsearch" text
        ><v-text-field hide-details></v-text-field><v-icon> mdi-magnify</v-icon></v-btn
      >
      <v-btn><v-icon>mdi-filter</v-icon></v-btn>
    </v-app-bar>
    <!-- top bar end -->
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    
    drawer: null,
        

    links: [
      { text: "Home", route: "/" },
      {
        text: "Access",
        route: "/",
        active: true,
        children: [
          { text: "What if..?", route: "/" },
          { text: "Intersectionality Tip", route: "/" },
          { text: "Relevant Indicators", route: "/" },
          { text: "Further Readings", route: "/" },
        ],
      },
      { text: "Emotional&Psychosocial Protection", route: "/" },
      { text: "Physical Protection", route: "/" },
      { text: "Teaching&Learning", route: "/" },
      { text: "Parents&Community", route: "/" },
      { text: "School leadership&management", route: "/" },
      { text: "Policy & System", route: "/" },
      { text: "Meal", route: "/" },
      { text: "Glossary", route: "/" },
      { text: "Help", route: "/" },
    ],
  }),
};
</script>
