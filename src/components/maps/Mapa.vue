<template>
<CargarMapa :configMapa='configMapa' :apiKey='apiKey'>
    <template slot-scope='{ google, map }'>
      <Marcadores
        v-for='marker in markers'
        :key='marker.id'
        :marker='marker'
        :google='google'
        :map='map'
      />
      <p>{{latitud}}gg</p>
    </template>
  </CargarMapa>
</template>

<script>
import CargarMapa from './CargarMapa'
import Marcadores from './Marcadores'
import { configMapa } from './configMapa'
import { apiKey } from '../../assets/keys/apikeymap.js'

export default {
  props: {
    latitud: {
      type: Number,
      default: 0
    },
    longitude: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      apiKey,
      markers: [
        {
          id: '0',
          // position: { lat: 4.660596, lng: -74.093463 },
          position: { lat: this.latitud, lng: this.longitude },
          title: 'home'
        }
      ]
    }
  },

  components: {
    CargarMapa,
    Marcadores
  },

  // created () {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.markers[0].position.lat = position.coords.latitude
  //     this.markers[0].position.lng = position.coords.longitude
  //     console.log(position.coords.latitude)
  //   })
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       return position
  //     }
  //     )
  //   }
  //   // console.log(position)
  // },

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
