<template>
  <div>
    <div class="form select-form">
      <input type="radio" id="one"
      value="login" v-model="typeLogin">
      <label for="one">Login</label>
      <br>
      <input type="radio" id="two"
      value="signup" v-model="typeLogin">
      <label for="two">Signup</label>

    </div>

    <!-- form login -->
    <div class="form">
      <form class="login" v-show="showTypeLog">
        <input type="email" name="username"
        id="Username_login" placeholder="editme"
        v-model="username">
        <input :type="typePassword" name="password"
        id="password_login" placeholder="editme"
        v-model="password">
        <button @click.prevent="switchTo">ver pass</button>
      </form>
    </div>

    <!-- form signup -->
    <div class="form">
      <form class="signup" v-show="!showTypeLog">
        <input type="email" name="username"
        id="Username_signup" placeholder="editme"
        v-model="username">
        <input :type="typePassword" name="password"
        id="password_signup" placeholder="editme"
        v-model="password">
        <button @click.prevent="switchTo">ver pass</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      username: '',
      password: '',
      typePassword: 'text',
      showTypeLog: true,
      typeLogin: 'login'
    }
  },
  methods: {
    switchTo () {
      this.typePassword = this.typePassword === 'text' ? 'password' : 'text'
    }
  },
  watch: {
    showTypeLog (newValue, oldValue) {
      this.typeLogin = this.typeLogin === 'login' ? 'login' : 'signup'
    },
    typeLogin (newValue, oldValu) {
      this.showTypeLog = !this.showTypeLog
    }
  }
}
</script>

<style lang="scss" scoped>
  .form{
    &>.login, &>.signup{
      display:flex;
      flex-direction: column;
    }
    &.select-form{
      display: flex;
    }
  }
</style>
