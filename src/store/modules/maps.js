export default {
  namespaced: true,
  state: {
    latitud: 4.660596,
    longitude: -74.093463
  },
  mutations: {
    SET_LOCATION (state) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition)
      }
      function setPosition (position) {
        state.latitud = position.coords.latitude
        state.longitude = position.coords.longitude
      }
    }
  }
}
