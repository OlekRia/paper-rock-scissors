import { cleanupBet, increaseBet, play } from '../functional/game'
import { Action, State } from '../types'

export const initialState: State = {
  balance: 5000,
  bet: 0,
  win: 0,
  rock: 0,
  paper: 0,
  scissors: 0,
  gameState: 'BETTING',
}

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INIT':
      return { ...initialState }
    case 'BETTING_INCREASE':
      return state.gameState === 'BETTING'
        ? increaseBet(state, action.payload)
        : state
    case 'BETTING_CLEANUP':
      return state.gameState === 'BETTING'
        ? cleanupBet(state, action.payload)
        : state
    case 'PLAY':
      return state.bet > 0 ? play(state, action.computerChoice) : state
    default:
      return { ...state }
  }
}
