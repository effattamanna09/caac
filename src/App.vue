<template>
 <v-app>
 <Header />
 <Home />
    <v-main>
     
    <slot />
    </v-main>
  <Footer />
   </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
 import Footer from './components/Footer.vue';


export default {
  name: 'App',

  components: {
    Header,
    Home,
    Footer,
  },

  data: () => ({
    
    //
  }),
};
</script>
<style lang="scss">
@import "./assets/css/style.scss";
</style>