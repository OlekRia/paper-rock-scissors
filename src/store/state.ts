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
    default:
      return { ...state }
  }
}
