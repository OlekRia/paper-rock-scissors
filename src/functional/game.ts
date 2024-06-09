import { Position, ResultType, State, Winner } from '../types'
import { zip } from './lists'
// import { zip } from './lists'
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

/**
 * Plays a round of the game with the given state and computer choice.
 *
 * @param {State} state - The current state of the game.
 * @param {Position} computerChoice - The choice made by the computer.
 * @return {State} The updated state after the round is played.
 */
export function play(state: State, computerChoice: Position): State {
  const newState = { ...state, computerChoice } as State

  const userBets = new Array<Position>()
  if (state.paper > 0) userBets.push('PAPER')
  if (state.rock > 0) userBets.push('ROCK')
  if (state.scissors > 0) userBets.push('SCISSORS')

  newState.gameState = 'PLAY'
  newState.message = {
    message: {
      gameState: newState.gameState,
      computerBet: computerChoice,
      userBets,
    },
  }

  // todo: write tests

  return newState
}

/**
 * Calculates the result of a game and updates the game state accordingly.
 *
 * @param {State} state - The current game state.
 * @return {State} The updated game state with the result.
 */
export function showResult(state: State): State {
  const newState = { ...state }
  newState.gameState = 'RESULT'

  const message = {
    gameState: newState.gameState,
    amount: '0.00',
    winner: 'DRAW',
    userBetPosition: newState.computerChoice,
  } as ResultType

  const positionBet = zip(
    ['PAPER', 'ROCK', 'SCISSORS'],
    [state.paper, state.rock, state.scissors],
  )

  const result = positionBet.map(([position, bet]) => {
    const p = position as Position
    const b = bet as number

    const result = b <= 0 ? 'DRAW' : winner(newState.computerChoice, p)
    return [position, bet, result]
  })

  console.log(newState.computerChoice, result)

  const betsCount = filledPositions(state)

  if (betsCount === 1) {
    // Player bets only 1 bet. Draw is possible
    result.forEach(([position, bet, result]) => {
      const b = bet as number
      const r = result as Winner

      if (b > 0) {
        message.winner = 'COMPUTER'
        message.userBetPosition = position as Position

        if (r === 'DRAW') {
          newState.win = b
          message.winner = 'DRAW'
        } else if (r === 'PLAYER') {
          const win = b * 14
          newState.win = win
          message.winner = 'PLAYER'
        }
        message.amount = newState.win.toFixed(2)
      }
    })
  } else if (betsCount === 2) {
    // Player bets 2 bet. Draw is impossible. Player wins or loses
    message.winner = 'COMPUTER'
    message.amount = '0.00'

    for (const [position, bet, res] of result) {
      const b = bet as number
      const r = res as Winner

      if (b > 0) {
        if (r === 'PLAYER') {
          const win = b * 3
          newState.win += win
          message.winner = 'PLAYER'
          message.userBetPosition = position as Position
          message.amount = newState.win.toFixed(2)
          break
        } else if (r === 'COMPUTER') {
          message.winner = 'COMPUTER'
          message.amount = '0.00'
          message.userBetPosition = position as Position
        }
      }
    }
  } else {
    console.error('no more 2 positions should be allowed')
  }

  newState.message = { message }

  return newState

  // todo: write tests
}

/**
 * Cleans up the game state by resetting the balance, win amount, bet, and game state.
 *
 * @param {State} state - The current game state.
 * @return {State} The updated game state after cleanup.
 */
export function cleanupGame(state: State): State {
  const newState = { ...state }

  newState.balance += newState.win
  newState.win = 0
  newState.rock = 0
  newState.paper = 0
  newState.scissors = 0
  newState.bet = 0
  newState.gameState = 'BETTING'
  newState.message = { message: { gameState: 'BETTING' } }

  // todo: write tests

  return newState
}
