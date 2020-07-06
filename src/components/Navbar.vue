<template>
  <div class="Navbar-content">
    <div class="log">
      <p>logo</p>
    </div>
    <div class="menu">
      <!-- <router-link to="/" class="link-menu"> about us </router-link> -->
      <div class="login" @click="SET_REGISTRY_LOGIN">
        <p>Sign in</p>
      </div>
      <div class="Signup" @click="SET_REGISTRY_SIGNUP">
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
  .login{
    padding: 4px 8px;
    border-radius: 4px;
    border:1px solid tomato;
    color: tomato;
  }
  .Signup{
    background-color: tomato;
    padding: 4px 8px;
    border-radius: 4px;
    color: white;
  }
  .login, .Signup{
    cursor: pointer;
  }
</style>
