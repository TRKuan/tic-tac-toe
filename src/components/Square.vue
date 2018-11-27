<template lang="html">
  <button class="square" @click="() => this.$emit('click')">{{type}}</button>
</template>

<script>
export default {
  name: 'square',
  props: {
    type: String,
    idx: Number
  }
}
</script>

<style lang="css" scoped>
.square {
  font-size: 3rem;
  width: 4rem;
  height: 4rem;
  float: left;
  background: none;
  border: none;
  outline: none;
}
</style>
