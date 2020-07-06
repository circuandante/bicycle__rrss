<template>
  <div class="signupComponent">
    <div class="close"
    @click.prevent="SET_REGISTRY_SIGNUP">
      <p>X</p>
    </div>
    <div class="formContent">
      <!-- form login -->
      <div class="form">
        <form class="login">
          <h2>Registro</h2>
          <input type="email" name="username" v-focus
          @keyup.esc="SET_REGISTRY_SIGNUP"
          id="Username_login" placeholder="Email"
          v-model="username">
          <input :type="typePassword" name="password"
          id="password_login" placeholder="Password"
          v-model="password">
          <div class="btnform">
            <p @click.prevent="switchTo">ver pass</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: '',
      typePassword: 'text'
    }
  },
  methods: {
    ...mapMutations('registry', [
      'SET_REGISTRY_SIGNUP'
    ]),
    switchTo () {
      this.typePassword = this.typePassword === 'text' ? 'password' : 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_login.scss';
</style>
