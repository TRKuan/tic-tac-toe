<template lang="html">
  <div class="turn">
    {{turn}}'s turn
  </div>
</template>

<script>
export default {
  name: 'turn',
  props: {
    turn: String
  }
}
</script>

<style lang="css" scoped>
.turn {
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
