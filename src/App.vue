<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
    </div>
    <router-view/>
    <navigation-link url="/profile">
      Su Perfil
      <slot />
    </navigation-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .mapa {
    height: 425px;
  }
</style>
