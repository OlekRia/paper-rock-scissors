import { Position, State } from '../types'

export const BET_STEP = 500

function oneIfExists(x: number): number {
  return x > 0 ? 1 : 0
}

export function increaseBet(state: State, payload: Position): State {
  // guard
  if (state.balance < BET_STEP) {
    console.warn('balance is not enough')
    return { ...state }
  }

  const filledPositions =
    oneIfExists(state.rock) +
    oneIfExists(state.paper) +
    oneIfExists(state.scissors)

  const positionMap: Record<Position, number> = {
    ROCK: state.rock,
    PAPER: state.paper,
    SCISSORS: state.scissors,
  }

  if (filledPositions > 1 && positionMap[payload] === 0) {
    console.warn('no more 2 positions should be allowed')
    return { ...state }
  }

  // happy path

  const newState = { ...state }

  if (payload === 'ROCK') {
    newState.rock += BET_STEP
  } else if (payload === 'PAPER') {
    newState.paper += BET_STEP
  } else if (payload === 'SCISSORS') {
    newState.scissors += BET_STEP
  }

  newState.balance -= BET_STEP
  newState.bet += BET_STEP

  return newState
}
