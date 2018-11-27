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
  },
  mutations: {
    toggleTurn(state) {
      if(state.turn == 'O')state.turn = 'X'
      else state.turn = 'O'
    },
    checkGameEnd(state) {
      let winner = ''
      let end = false
      if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+2]){
        end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[0*3+2]){
        end = true
        winner = state.squares[2*3+0]
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[0*3+1] && state.squares[0*3+1] === state.squares[0*3+2]){
        end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[1*3+0] !== '' && state.squares[1*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[1*3+2]){
        end = true
        winner = state.squares[1*3+0]
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[2*3+1] && state.squares[2*3+1] === state.squares[2*3+2]){
        end = true
        winner = state.squares[2*3+0]
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+0] && state.squares[1*3+0] === state.squares[2*3+0]){
        end = true
        winner = state.squares[0*3+0]
      }
      else if(state.squares[0*3+1] !== '' && state.squares[0*3+1] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+1]){
        end = true
        winner = state.squares[0*3+1]
      }
      else if(state.squares[0*3+2] !== '' && state.squares[0*3+2] === state.squares[1*3+2] && state.squares[1*3+2] === state.squares[2*3+2]){
        end = true
        winner = state.squares[0*3+2]
      }
      if(end){
        state.end = true
      }else{
        for(let i=0;i<9;i++){
            if(state.squares[i] === '')return
        }
        state.end = true
      }
    },
    setSquares(state, payload) {
      Vue.set(state.squares, payload.i*3+payload.j, state.turn)
    }
  },
  actions: {

  }
})
