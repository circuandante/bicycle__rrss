<template>
  <div class="Navbar-wrap">
    <router-link to="/" class="link-menu"> about us </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navber'
}
</script>

<style lang="scss" scoped>
.Navbar-wrap{
  width: 10vw;
  height: 10vh;
}
  .link-menu{
    color: darkblue;
  }
</style>
