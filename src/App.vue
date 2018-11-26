<template>
  <div id="app">
    <game/>
  </div>
</template>
<script>
import Game from '@/views/Game.vue'
export default {
  name: 'app',
  components: {
    Game
  }
}
</script>
<style>
#app {
  font-family: 'Comic sans MS', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 3rem;
}
button {
  font-family: inherit;
}
</style>
