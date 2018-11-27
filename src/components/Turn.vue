<template lang="html">
  <div class="turn">
    {{turn}}'s trun
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'turn',
  computed: mapState([
    'turn'
  ])
}
</script>

<style lang="css" scoped>
.turn {
  font-size: 1.5rem;
  margin: 1rem;
}
</style>
