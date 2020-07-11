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
          v-model="user_data.email">
          <input type="text" name="password"
          id="password_login" placeholder="Nickname"
          v-model="user_data.nickname">
          <input type="text" name="Username"
          id="password_login" placeholder="Username"
          v-model="user_data.username">
          <input :type="typePassword" name="password"
          id="password_login" placeholder="Password"
          v-model="user_data.password">
          <input :type="typePassword" name="password"
          id="password_login" placeholder="Password confirmation"
          v-model="user_data.password_confirmation">
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
      user_data: {
        email: 'jess@mon.com',
        nickname: 'aksjdkaj',
        username: 'asdjfaj',
        password: 'jess1234',
        password_confirmation: 'jess1234'
      },
      typePassword: 'text'
    }
  },
  methods: {
    ...mapMutations('registry', [
      'SET_REGISTRY_SIGNUP'
    ]),
    switchTo () {
      this.$store.dispatch('registry/signup', this.user_data)
      this.typePassword = this.typePassword === 'text' ? 'password' : 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_login.scss';
</style>
