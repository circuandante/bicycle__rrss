import Vue from 'vue'
import Vuex from 'vuex'

// modules
import loading from './modules/loading'
import registry from './modules/registry'
import maps from './modules/maps'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading: loading,
    registry: registry,
    maps
  }
})
