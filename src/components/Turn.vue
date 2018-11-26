<template lang="html">
  <div class="turn">
    {{name}}'s trun
  </div>
</template>

<script>
export default {
  name: 'turn',
  props: {
    name: String
  }
}
</script>

<style lang="css" scoped>
.turn {
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
