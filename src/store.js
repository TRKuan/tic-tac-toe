import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    end: false,
    squares: [
      '', '', '',
      '', '', '',
      '', '', '',
    ],
    turn: 'O',
    messageText: ''
  },
  mutations: {
    toggleTurn(state) {
      if(state.turn == 'O')state.turn = 'X'
      else state.turn = 'O'
    },
    checkGameEnd(state) {
      let winner = ''
      if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+2]){
        state.end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[0*3+2]){
        state.end = true
        winner = state.squares[2*3+0]
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[0*3+1] && state.squares[0*3+1] === state.squares[0*3+2]){
        state.end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[1*3+0] !== '' && state.squares[1*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[1*3+2]){
        state.end = true
        winner = state.squares[1*3+0]
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[2*3+1] && state.squares[2*3+1] === state.squares[2*3+2]){
        state.end = true
        winner = state.squares[2*3+0]
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+0] && state.squares[1*3+0] === state.squares[2*3+0]){
        state.end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[0*3+1] !== '' && state.squares[0*3+1] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+1]){
        state.end = true
        winner = state.squares[0*3+1]
      }
      else if(state.squares[0*3+2] !== '' && state.squares[0*3+2] === state.squares[1*3+2] && state.squares[1*3+2] === state.squares[2*3+2]){
        state.end = true
        winner = state.squares[0*3+2]
      }
      if(state.end){
        state.messageText = `Winner: ${winner}`
        return
      }
      for(let i=0;i<9;i++){
          if(state.squares[i] === '')return
      }
      state.end = true
      state.messageText = 'Draw'
    },
    setSquares(state, payload) {
      Vue.set(state.squares, payload.i*3+payload.j, state.turn)
    },
    restart(state) {
      state.end = false
      state.squares = [
        '', '', '',
        '', '', '',
        '', '', '',
      ]
      state.turn = 'O'
      state.messageText = ''
    }
  },
  actions: {

  }
})
