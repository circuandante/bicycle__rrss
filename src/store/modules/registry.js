export default {
  namespaced: true,
  state: () => ({
    login: false,
    signup: false,
    userlogin: true
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
