export type Bets = 0 | 500 | 1000 | 1500

export type Position = 'ROCK' | 'PAPER' | 'SCISSORS'

export type GameState = 'BETTING' | 'PLAY' | 'RESULT'

export type Action = { type: 'INIT' }

export type State = {
  balance: number
  bet: number
  win: number
  rock: Bets
  paper: Bets
  scissors: Bets
  gameState: GameState
}
