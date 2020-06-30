<template>
  <div class="loading-layout">
    <slot/>
    <Signup />
  </div>
</template>

<script>
import Signup from '../components/Signup'
export default {
  name: 'LoadLayout',
  components: {
    Signup
  }
}
</script>

<style lang="scss" scoped>
.loading-layout{
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
