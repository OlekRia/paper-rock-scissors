export type Position = 'ROCK' | 'PAPER' | 'SCISSORS'

export type GameState = 'BETTING' | 'PLAY' | 'RESULT'

export type Winner = 'PLAYER' | 'COMPUTER'

export type Action =
  | { type: 'INIT' }
  | { type: 'BETTING_INCREASE'; payload: Position }
  | { type: 'BETTING_CLEANUP'; payload: Position }

export type State = {
  balance: number
  bet: number
  win: number
  rock: number
  paper: number
  scissors: number
  gameState: GameState
}
