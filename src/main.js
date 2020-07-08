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

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
