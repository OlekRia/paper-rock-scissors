import {
  cleanupBet,
  increaseBet,
  play,
  cleanupGame,
  showResult,
} from '../functional/game'
import { Action, MessageType, State } from '../types'

export const initialState: State = {
  computerChoice: 'ROCK',
  balance: 5000,
  bet: 0,
  win: 0,
  rock: 0,
  paper: 0,
  scissors: 0,
  gameState: 'BETTING',
  message: { message: { gameState: 'BETTING' } } as MessageType,
}

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INIT':
      return { ...initialState }
    case 'BETTING_INCREASE':
      return state.gameState === 'BETTING'
        ? increaseBet(state, action.payload)
        : { ...state }
    case 'BETTING_CLEANUP':
      return state.gameState === 'BETTING'
        ? cleanupBet(state, action.payload)
        : { ...state }
    case 'PLAY': {
      if (state.gameState === 'BETTING' && state.bet > 0) {
        return play(state, action.computerChoice)
      } else if (state.gameState === 'PLAY') {
        return showResult(state)
      } else if (state.gameState === 'RESULT') {
        return cleanupGame(state)
      } else {
        return { ...state }
      }
    }
    default:
      return { ...state }
  }
}
