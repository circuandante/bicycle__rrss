<template>
  <div id='app'>
    <Navbar />
    <LoginLayout v-if="isLoading" />
    <MainLayout v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoginLayout from './layout/LoginLayout'
import MainLayout from './layout/MainLayout'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    LoginLayout,
    MainLayout,
    Navbar
  },
  computed: {
    ...mapState(
      'loading',
      { isLoading: 'isLoading' }
    )
  }
}
</script>

<style lang="scss" scoped>
  .mapa {
    height: 425px;
  }
</style>
