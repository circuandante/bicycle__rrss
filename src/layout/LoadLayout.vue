<template>
  <div class="loading-layout">
    <slot/>
    <Signup />
  </div>
</template>

<script>
import Signup from '../components/signup'
export default {
  name: 'LoadLayout',
  components: {
    Signup
  }
}
</script>
