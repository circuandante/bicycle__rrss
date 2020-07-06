<template>
  <CargarMapa :configMapa='configMapa' apiKey='AIzaSyCT2b74W0URIQnKSwJNyLQn7svkGaOE6Xg'>
    <template slot-scope='{ google, map }'>
      <Marcadores
        v-for='marker in markers'
        :key='marker.id'
        :marker='marker'
        :google='google'
        :map='map'
      />
    </template>
  </CargarMapa>
</template>

<script>
import CargarMapa from './CargarMapa'
import Marcadores from './Marcadores'
import { configMapa } from './configMapa'

export default {
  components: {
    CargarMapa,
    Marcadores
  },

  data () {
    return {
      markers: [
        {
          id: '0',
          position: { lat: -13.1583635, lng: -72.603623 },
          title: 'Machu Pichu - Cusco'
        },
        {
          id: '1',
          position: { lat: -12.025827, lng: -77.2679817 },
          title: 'Lima - Perú'
        }
      ]
    }
  },

  computed: {
    configMapa () {
      return {
        ...configMapa,
        center: this.mapCenter
      }
    },

    mapCenter () {
      return this.markers[0].position
    }
  }
}
</script>
