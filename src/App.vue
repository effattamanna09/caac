<template>
 <v-app>
 <Header />
    <v-main>
     
    <slot />
    </v-main>
  <Footer />
   </v-app>
</template>

<script>
import Header from './components/Header.vue';
 import Footer from './components/Footer.vue';


export default {
  name: 'base-layout',

  components: {
    Header,
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