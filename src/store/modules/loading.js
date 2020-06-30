export default {
  namespaced: true,
  state: {
    isLoading: true
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  }
}
