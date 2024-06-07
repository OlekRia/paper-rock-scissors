export type Bets = number

export type Position = 'ROCK' | 'PAPER' | 'SCISSORS'

export type GameState = 'BETTING' | 'PLAY' | 'RESULT'

export type Winner = 'PLAYER' | 'COMPUTER'

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
