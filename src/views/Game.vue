<template>
  <div class="game">
    <turn :turn="turn"/>
    <board :turn="turn" :end="end" @squareClicked="toggleTurn" @gameEnd="onGameEnd" ref="board"/>
    <h1 v-if="end">End</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import Turn from '@/components/Turn.vue'

export default {
  name: 'game',
  components: {
    Board,
    Turn
  },
  data() {
    return {
      turn: 'O',
      end: false
    }
  },
  methods: {
    toggleTurn() {
      if(this.turn == 'O')this.turn = 'X'
      else this.turn = 'O'
    },
    onGameEnd() {
      this.end = true
    }
  }
}
</script>
<style lang="css" scoped>
.btn {
  font-size: 1rem;
  padding: 0.5rem;
  color: white;
  background-color: #2c3e50;
  border: none;
  border-radius: 10px;
  outline: none;
}
.btn:hover{
  background-color: #292d39;
}
</style>
