<template>
  <div class="proof">
    {{username}}
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: Text,
      default: 'j'
    }
  },
  created () {
    this.username = 'ddd'
  }
}
</script>
