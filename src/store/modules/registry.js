export default {
  namespaced: true,
  state: () => ({
    login: false,
    signup: false
  }),
  mutations: {
    SET_REGISTRY_LOGIN (state, payload) {
      state.login = !state.login
    },
    SET_REGISTRY_SIGNUP (state, payload) {
      state.signup = !state.signup
    }
  }
}
