<template>
  <div id='app'>
    <MainLayout v-if="isLoading"/>
    <LoadLayout v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoadLayout from './layout/LoadLayout'
import MainLayout from './layout/MainLayout'
export default {
  name: 'App',
  components: {
    LoadLayout,
    MainLayout
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
