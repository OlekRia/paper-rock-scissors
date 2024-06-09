export type Position = 'ROCK' | 'PAPER' | 'SCISSORS'

export type GameState = 'BETTING' | 'PLAY' | 'RESULT' | 'CLEANUP'

export type Winner = 'PLAYER' | 'COMPUTER' | 'DRAW'

export type Action =
  | { type: 'INIT' }
  | { type: 'BETTING_INCREASE'; payload: Position }
  | { type: 'BETTING_CLEANUP'; payload: Position }
  | { type: 'PLAY'; computerChoice: Position }

export type BettingType = { gameState: 'BETTING' }

export type PlayType = {
  gameState: 'PLAY'
  computerBet: Position
  userBets: Array<Position>
}

export type ResultType = {
  gameState: 'RESULT'
  amount: string
  winner: Winner
  userBetPosition: Position
}

export type MessageType = { message: BettingType | PlayType | ResultType }

export type State = {
  computerChoice: Position
  balance: number
  bet: number
  win: number
  rock: number
  paper: number
  scissors: number
  gameState: GameState
  message: MessageType
}
