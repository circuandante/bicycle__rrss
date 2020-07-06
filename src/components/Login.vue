<template>
  <div class="signupComponent">
    <div class="close"
    @click.prevent="SET_REGISTRY_LOGIN">
      <p>X</p>
    </div>
    <div class="formContent">
    <!-- form signup -->
      <div class="form">
        <h2>Iniciar sesión</h2>
        <form class="signup">
          <input type="text" name="username" v-focus
          @keyup.esc="SET_REGISTRY_LOGIN"
          id="Username_signup" placeholder="Email"
          v-model="username">
          <input :type="typePassword" name="password"
          id="password_signup" placeholder="Password"
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
  data () {
    return {
      username: '',
      password: '',
      typePassword: 'text'
    }
  },
  methods: {
    ...mapMutations('registry', [
      'SET_REGISTRY_LOGIN'
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
