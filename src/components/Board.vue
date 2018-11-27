<template lang="html">
  <div class="board">
    <div v-for="i in 3" :key="i" class="row" :class="{'row-center':i==2}">
      <square
        v-for="j in 3"
        :type="squares[(i-1)*3+j-1]"
        :key="j"
        :class="{'col-center':j==2}"
        @click="() => onSquareClicked(i-1, j-1)"
      />
    </div>
  </div>

</template>

<script>
import Square from '@/components/Square.vue'
export default {
  name: 'board',
  components: {
      Square
  },
  data() {
    return {
      squares: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
    }
  },
  props: {
    turn: String,
    end: Boolean
  },
  methods: {
    onSquareClicked(i, j) {
      if(this.squares[i*3+j] !== '' || this.end)return
      this.$set(this.squares, i*3+j, this.turn)
      this.$emit('squareClicked')
      this.checkGameEnd()
    },
    checkGameEnd() {
      let winner = ''
      let end = false
      if(this.squares[0*3+0] !== '' && this.squares[0*3+0] === this.squares[1*3+1] && this.squares[1*3+1] === this.squares[2*3+2]){
        end = true
        winner = this.squares[0*3+0]
      }
      else if(this.squares[2*3+0] !== '' && this.squares[2*3+0] === this.squares[1*3+1] && this.squares[1*3+1] === this.squares[0*3+2]){
        end = true
        winner = this.squares[2*3+0]
      }
      else if(this.squares[0*3+0] !== '' && this.squares[0*3+0] === this.squares[0*3+1] && this.squares[0*3+1] === this.squares[0*3+2]){
        end = true
        winner = this.squares[0*3+0]
      }
      else if(this.squares[1*3+0] !== '' && this.squares[1*3+0] === this.squares[1*3+1] && this.squares[1*3+1] === this.squares[1*3+2]){
        end = true
        winner = this.squares[1*3+0]
      }
      else if(this.squares[2*3+0] !== '' && this.squares[2*3+0] === this.squares[2*3+1] && this.squares[2*3+1] === this.squares[2*3+2]){
        end = true
        winner = this.squares[2*3+0]
      }
      else if(this.squares[0*3+0] !== '' && this.squares[0*3+0] === this.squares[1*3+0] && this.squares[1*3+0] === this.squares[2*3+0]){
        end = true
        winner = this.squares[0*3+0]
      }
      else if(this.squares[0*3+1] !== '' && this.squares[0*3+1] === this.squares[1*3+1] && this.squares[1*3+1] === this.squares[2*3+1]){
        end = true
        winner = this.squares[0*3+1]
      }
      else if(this.squares[0*3+2] !== '' && this.squares[0*3+2] === this.squares[1*3+2] && this.squares[1*3+2] === this.squares[2*3+2]){
        end = true
        winner = this.squares[0*3+2]
      }

      if(end)this.$emit('gameEnd', winner)
      else{
        for(let i=0;i<9;i++){
          if(this.squares[i] === '')return
        }
        this.$emit('gameEnd', 'draw')
      }
    },
    restart() {
      this.squares = [
        '', '', '',
        '', '', '',
        '', '', '',
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.board {
  width: 12rem;
  height: 12rem;
  margin: auto;
}
.row {
  width: 12rem;
  height: 4rem;
}
.row-center {
  border-top: 0.3rem solid black;
  border-bottom: 0.3rem solid black;
}
.col-center {
  border-left: 0.3rem solid black;
  border-right: 0.3rem solid black;
}
</style>
