<template>
  <div>
    <div class="search">
      <div class="query">
        <input type="text" name="" id=""
        placeholder="Buscar ubicación"
        v-model="queryMaps">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryMaps: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .search{
    width: 100vw;
    position: fixed;
    top: 32px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10vw;
    & input{
      width: 500px;
      padding: 8px;
      border-radius: 10px;
      border:0px solid transparent;
      // box-shadow: -1px 1px 6px 1px #afafaf;
      box-shadow: 0px 6px 6px 2px #cacaca9c;
    }
    & input:focus{
      border:0px solid transparent;
      border-radius: 10px;
      border-color: transparent;
      outline: none;
    }
  }
</style>
