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
      let end = false
      if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+2]){
        end = true
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[0*3+2]){
        end = true
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[0*3+1] && state.squares[0*3+1] === state.squares[0*3+2]){
        end = true
      }
      else if(state.squares[1*3+0] !== '' && state.squares[1*3+0] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[1*3+2]){
        end = true
      }
      else if(state.squares[2*3+0] !== '' && state.squares[2*3+0] === state.squares[2*3+1] && state.squares[2*3+1] === state.squares[2*3+2]){
        end = true
      }
      else if(state.squares[0*3+0] !== '' && state.squares[0*3+0] === state.squares[1*3+0] && state.squares[1*3+0] === state.squares[2*3+0]){
        end = true
      }
      else if(state.squares[0*3+1] !== '' && state.squares[0*3+1] === state.squares[1*3+1] && state.squares[1*3+1] === state.squares[2*3+1]){
        end = true
      }
      else if(state.squares[0*3+2] !== '' && state.squares[0*3+2] === state.squares[1*3+2] && state.squares[1*3+2] === state.squares[2*3+2]){
        end = true
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
    setSquares(state, idx) {
      Vue.set(state.squares, idx, state.turn)
    }
  },
  actions: {
    squareClicked(context, idx) {
      if(context.state.squares[idx] !== '' || context.state.end)return
      context.commit('setSquares', idx)
      context.commit('toggleTurn')
      context.commit('checkGameEnd')
    }
  }
})
