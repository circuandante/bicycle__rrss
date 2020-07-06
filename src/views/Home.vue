<template>
  <div class="home">
    <div class="claimHome">
      <h1>
        Somos una aplicación <br>
        en pro de los ciclistas urbanos
      </h1>
      <p>Nuestro primer objetivo es crear
        una comunidad que reporte los robos,
        y que <span><b>{{name}}</b> te sugiera la ruta más segura</span>
      </p>
      <div class="Signup" @click="SET_REGISTRY_SIGNUP">
        <p>Sign up</p>
      </div>
    </div>
    <div class="imgHome">
      <figure>
        <img src="@/assets/img/home.png" alt="">
      </figure>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navber',
  data () {
    return {
      name: 'Urbic'
    }
  },
  methods: {
    ...mapMutations('registry', [
      'SET_REGISTRY_SIGNUP'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  width: 100vw;
}
.claimHome, .imgHome{
  display: flex;
  justify-content: center;
}
.claimHome{
  align-items: center;
  width: 50%;
  height: 90vh;
  flex-direction: column;
  & p, & h1{
    width: 75%;
  }
  & h1{
    font-size: 2.5rem;
    line-height: 1em;
  }
  & p{
    font-size: 1.2rem;
    line-height: 1em;
  }
  & span{
    font-size: 1.3rem;
  }
}
.Signup{
  margin-top: 24px;
  width: 75%;
  background-color: var(--color-main-action);
  padding: 16px;
  border-radius: 4px;
  color: white;
  box-sizing: border-box;
}
.login, .Signup{
  cursor: pointer;
}
.imgHome{
  width: 50%;
  transform: scaleX(-1);
}
</style>
