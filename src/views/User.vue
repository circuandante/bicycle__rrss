<template>
  <div>
    <Mapa class="mapa"/>
    <Search />
    <MenuWrapp />
  </div>
</template>

<script>
import Mapa from '../components/maps/Mapa'
import Search from '../components/Search'
import MenuWrapp from '../components/MenuWrapp'
export default {
  components: {
    Mapa,
    Search,
    MenuWrapp
  }
}
</script>

<style lang="scss" scoped>
  .mapa {
    height: 425px;
  }

</style>
