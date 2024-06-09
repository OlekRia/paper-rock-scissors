import { Position, State, Winner } from '../types'
import { zip } from './lists'
import { oneIfExists } from './numbers'

/**
 * Determines the winner of a game of rock-paper-scissors.
 *
 * @param {Position} computer - The computer's choice.
 * @param {Position} human - The player's choice.
 * @return {Winner} The winner of the game. Returns 'DRAW' if the choices are the same.
 */
export function winner(computer: Position, human: Position): Winner {
  if (human === computer) {
    return 'DRAW'
  } else {
    const winner =
      (human === 'ROCK' && computer === 'SCISSORS') ||
      (human === 'PAPER' && computer === 'ROCK') ||
      (human === 'SCISSORS' && computer === 'PAPER')

    return winner ? 'PLAYER' : 'COMPUTER'
  }
}

//

export const BET_STEP = 500

type PositionProps = 'rock' | 'paper' | 'scissors'

function toLowercasePosition(position: Position): PositionProps {
  return position.toLowerCase() as PositionProps
}

function filledPositions(state: State): number {
  return (
    oneIfExists(state.rock) +
    oneIfExists(state.paper) +
    oneIfExists(state.scissors)
  )
}

/**
 * Increases the bet for a given position in the game state.
 *
 * @param {State} state - The current game state.
 * @param {Position} payload - The position for which the bet is being increased.
 * @return {State} The updated game state with the increased bet.
 */
export function increaseBet(state: State, payload: Position): State {
  // guards

  if (state.balance < BET_STEP) {
    console.warn('balance is not enough')
    return { ...state }
  }

  const amount = state[toLowercasePosition(payload)]
  const betsCount = filledPositions(state)
  if (betsCount > 1 && amount === 0) {
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

/**
 * Decreases the bet for a given position in the game state and updates the balance accordingly.
 *
 * @param {State} state - The current game state.
 * @param {Position} position - The position for which the bet is being decreased.
 * @return {State} The updated game state with the decreased bet and updated balance.
 */
export function cleanupBet(state: State, position: Position): State {
  const newState = { ...state }

  const amount = newState[toLowercasePosition(position)]
  newState[toLowercasePosition(position)] = 0
  newState.balance += amount
  newState.bet -= amount

  return newState
}

export function play(state: State, computerChoice: Position): State {
  const newState = { ...state }

  const positionBet = zip(
    ['PAPER', 'ROCK', 'SCISSORS'],
    [state.paper, state.rock, state.scissors],
  )

  const result = positionBet.map(([position, bet]) => {
    const result = bet <= 0 ? 'DRAW' : winner(computerChoice, position)
    return [bet, result]
  })

  const betsCount = filledPositions(state)

  if (betsCount === 1) {
    result.forEach(([bet, result]) => {
      if (bet > 0) {
        if (result === 'DRAW') {
          newState.balance += bet
          newState.win = bet
        } else if (result === 'PLAYER') {
          const win = bet * 14
          newState.balance += win
          newState.win = win
        } else if (result === 'COMPUTER') {
          newState.win = 0
        }
      }
    })
  }
  else if (betsCount === 2) {
    if(bet > 0) {
      if(result === 'PLAYER') {
        const win = bet*3
        newState.balance += win
        newState.win = win
      } else {
        newState.win = 0
      }
    }
   }
  else {
    console.error('no more 2 positions should be allowed')
  }

  console.log(result)
  return { ...newState, gameState: 'RESULT' }
}
