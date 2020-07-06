<template>
  <div>
    <Mapa class="mapa"/>
  </div>
</template>

<script>
import Mapa from '../components/maps/Mapa'
export default {
  components: {
    Mapa
  }
}
</script>

<style lang="scss" scoped>
  .mapa {
    height: 425px;
  }
</style>
