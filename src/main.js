import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// css
import './assets/css/main.scss'

Vue.config.productionTip = false

Vue.directive('focus', {
  // Cuando el elemento enlazado se inserta en el DOM...
  inserted: function (el) {
    // Enfoca el elemento
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
