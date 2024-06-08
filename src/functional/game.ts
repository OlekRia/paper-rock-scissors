import { Position, State } from '../types'
import { oneIfExists } from './numbers'

export const BET_STEP = 500

type PositionProps = 'rock' | 'paper' | 'scissors'

function toLowercasePosition(position: Position): PositionProps {
  return position.toLowerCase() as PositionProps
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

  const amount = state[toLowercasePosition(payload)]
  if (filledPositions > 1 && amount === 0) {
    console.warn('no more 2 positions should be allowed')
    return { ...state }
  }

  // happy path

  const newState = { ...state }

  newState[toLowercasePosition(payload)] += BET_STEP
  newState.balance -= BET_STEP
  newState.bet += BET_STEP

  return newState
}

export function cleanupBet(state: State, payload: Position): State {
  const newState = { ...state }

  const amount = newState[toLowercasePosition(payload)]
  newState[toLowercasePosition(payload)] = 0
  newState.balance += amount
  newState.bet -= amount

  return newState
}
