import router from '../../router'
export default {
  namespaced: true,
  state: () => ({
    login: false,
    signup: false,
    userlogin: true,
    email: 'jess@mon.com',
    user_data: {
      id: 7,
      token: '',
      first_name: '',
      last_name: '',
      email: '',
      username: 'asdjfaj',
      is_public: true,
      is_superuser: false
    }
  }),
  mutations: {
    SET_REGISTRY_LOGIN (state, payload) {
      state.login = !state.login
    },
    SET_REGISTRY_SIGNUP (state, payload) {
      state.signup = !state.signup
    },
    SET_DATA_USER (state, payload) {
      state.user_data.id = payload.user.id
      state.user_data.token = payload.token
      state.user_data.first_name = payload.user.first_name
      state.user_data.last_name = payload.user.last_name
      state.user_data.username = payload.user.username
    },
    DATA_USER (state, payload) {
      state.user_data.id = payload.id
      state.user_data.email = payload.email
      state.user_data.first_name = payload.first_name
      state.user_data.last_name = payload.last_name
      state.user_data.username = payload.username
    }
  },
  actions: {
    async signup ({ commit }, payload) {
      const miInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        mode: 'cors',
        cache: 'default'
      }
      try {
        const res = await fetch('http://127.0.0.1:8000/user/signup/', miInit)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },

    async login ({ commit }, payload) {
      const miInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        mode: 'cors',
        cache: 'default'
      }
      try {
        await fetch('http://127.0.0.1:8000/user/login/', miInit)
          .then(res => {
            if (res.status === 201) {
              return res.json()
            } else {
              return false
            }
          })
          .then(userData => {
            if (userData !== undefined) {
              commit('SET_REGISTRY_LOGIN')
              commit('SET_DATA_USER', userData)
              router.push({
                path: `/user/${userData.user.username}`
              })
            }
          })
      } catch (error) {
        console.log(error, 'sd')
      }
    },

    async getUserData ({ commit }, payload) {
      const miInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token bfc4a04fc95374bad7f05514eef97044895ff4c8'
        },
        mode: 'cors',
        cache: 'default'
      }
      try {
        await fetch(`http://127.0.0.1:8000/user/${payload}/`, miInit)
          .then(res => res.json())
          .then(userData => {
            commit('DATA_USER', userData)
            console.log(userData, payload)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
