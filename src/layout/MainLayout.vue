<template>
  <div>
    <Navbar />
    <Home />
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Home from '../views/Home'

export default {
  components: {
    Navbar,
    Home
  }
}
</script>
