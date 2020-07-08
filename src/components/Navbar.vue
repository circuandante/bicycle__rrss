<template>
  <div class="Navbar-content">
    <div class="logo">
      <h1>Urbic</h1>
    </div>
    <div class="menu">
      <!-- <router-link to="/" class="link-menu"> about us </router-link> -->
      <div class="btn secondary" @click="SET_REGISTRY_LOGIN">
        <p>Sign in</p>
      </div>
      <div class="btn main Signup" @click="SET_REGISTRY_SIGNUP">
        <p>Sign up</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navber',
  methods: {
    ...mapMutations('registry', [
      'SET_REGISTRY_LOGIN',
      'SET_REGISTRY_SIGNUP'
    ])
  }
}
</script>

<style lang="scss" scoped>
.Navbar-content{
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
}
  .link-menu{
    color: darkblue;
  }
  .menu{
    padding-right: 32px;
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
  .logo h1{
    font-size: 2rem;
    margin-top: 24px;
    margin-left: 80px;
    color: var(--color-main-action)
  }
</style>
