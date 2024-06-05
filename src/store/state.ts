import { ActionType, StateType } from '../types'

export const initialState: StateType = {
  balance: 5000,
  rock: 0,
  paper: 0,
  scissors: 0,
}

export const gameReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  switch (action.type) {
    case 'INIT':
      return { ...initialState }
    default:
      return { ...state }
  }
}
