<template>
  <div class="wrapper">
    <div class="imgPerfil">
      <div class="imgGroupUser">
        <figure>
          <img src="@/assets/img/yo.jpg" alt="imagePerfil"
          class="imagePerfil">
        </figure>
        <div class="name">
          <p>{{username | capitalize}}<br/>
          {{last_name | capitalize}}</p>
        </div>
      </div>
    </div>

    <div class="btn main">
      <p>Reportar robo</p>
    </div>

    <div class="btn secondary">
      <p>Comenzar ruta</p>
    </div>

    <details open>
      <summary>Bici</summary>
      <dl>
        <dt>Mi bici</dt>
        <dt>Crear bici</dt>
        <dt>Quitar bici</dt>
        <dt>Accesorios</dt>
      </dl>
    </details>

    <details>
      <summary>Accesorios</summary>
      <dl>
        <dt>Para la bici</dt>
        <dt>Para mi</dt>
        <dt>Para mantenimiento</dt>
      </dl>
    </details>

  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'andres',
      last_name: 'rivera'
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper{
  width: 300px;
  height: 100vh;
  padding: 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f1f1f1;
  box-sizing: border-box;
  box-shadow: inset 2px -1px 17px 3px #afafaf;
}
.imgGroupUser{
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.imgGroupUser > figure{
  width: 100px;
  height: 100px;
  margin-right: 16px;
  border-radius: 50%;
  overflow: hidden;
}

.imagePerfil{
  width: 100px;
  object-fit: contain;
}

.name>p{
  font-size: 24px;
  line-height: 1em;
}
</style>
