export type Bets = 0 | 500 | 1000 | 1500

export type Position = 'ROCK' | 'PAPER' | 'SCISSORS'

export type ActionType = { type: 'INIT' }

export type StateType = {
  balance: number
  rock: Bets
  paper: Bets
  scissors: Bets
}
