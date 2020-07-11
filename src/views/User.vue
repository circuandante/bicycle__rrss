<template>
  <div>
    <!-- <Mapa class="mapa" :latitud="latitud" :longitude="longitude" /> -->
    <Search />
    <MenuWrapp />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Mapa from '../components/maps/Mapa'
import Search from '../components/Search'
import MenuWrapp from '../components/MenuWrapp'
export default {
  props: {
    username: {
      type: String,
      default: 'j'
    }
  },
  components: {
    // Mapa,
    Search,
    MenuWrapp
  },
  computed: {
    ...mapState('maps', [
      'latitud',
      'longitude'
    ])
  },
  created () {
    this.$store.dispatch('registry/getUserData', this.username)
    console.log(this.username)
  }
}
</script>

<style lang="scss" scoped>
  .mapa {
    height: 425px;
  }

</style>
