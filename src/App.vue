<template>
  <div id='app'>
    <Navbar />
    <MainLayout />
    <Signup class="signup" v-if="signup" />
    <Login class="Login" v-if="login" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainLayout from './layout/MainLayout'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Login'
export default {
  name: 'App',
  components: {
    MainLayout,
    Navbar,
    Signup,
    Login
  },
  computed: {
    ...mapState({
      login: state => state.registry.login,
      signup: state => state.registry.signup
    })
  }
}
</script>

<style lang="scss" scoped>
  #App{
    // .signupComponent{
    position: relative;
  }
  .signup, .Login{
    position: fixed;
    top: 0;
    left: 0;
  }

  .mapa {
    height: 425px;
  }
</style>
