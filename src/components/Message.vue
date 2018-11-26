<template lang="html">
  <div class="message">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {
    text: String
  }
}
</script>

<style lang="css" scoped>
.message {
  font-size: 2rem;
  margin: 1rem;
  margin-top: 2rem;
}
</style>
