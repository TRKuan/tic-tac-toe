<template lang="html">
  <div class="message">
    {{messageText}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'message',
  computed: mapState([
    'messageText',
  ])
}
</script>

<style lang="css" scoped>
.message {
  font-size: 2rem;
  margin: 1rem;
  margin-top: 2rem;
}
</style>
