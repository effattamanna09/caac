import Vue from 'vue'
// import App from './App.vue'
import vuetify from './plugins/vuetify'

const NotFound = { template: '<p>Page not found</p>' }
import Home from './components/Home.vue'
import about from './components/about.vue'

Vue.config.productionTip = false;

const routes = {
  '/': Home,
  '/about-us': about,
}
new Vue({
  vuetify,
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// new Vue({
//   vuetify,
//   data: {
//         currentRoute: window.location.pathname
//       },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render: h => h(this.ViewComponent)
// }).$mount('#app')
