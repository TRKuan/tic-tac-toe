<template>
  <div class="game">
    <turn :name="turn"/>
    <board :turn="turn" :end="end" @squareClicked="toggleTurn" @gameEnd="onGameEnd" ref="board"/>
    <message :text="messageText"/>
    <button v-if="end" class="btn" @click="restart">Restart</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Board from '@/components/Board.vue'
import Turn from '@/components/Turn.vue'
import Message from '@/components/Message.vue'

export default {
  name: 'game',
  components: {
    Board,
    Turn,
    Message
  },
  data() {
    return {
      turn: 'O',
      messageText: '',
      end: false
    }
  },
  methods: {
    toggleTurn() {
      if(this.turn == 'O')this.turn = 'X'
      else this.turn = 'O'
    },
    onGameEnd(winner) {
      this.end = true
      if(winner === 'draw')
        this.messageText = 'Draw'
      else
        this.messageText = `Winner: ${winner}`
    },
    restart() {
      this.end = false
      this.messageText = ''
      this.turn = 'O'
      this.$refs.board.restart()
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
