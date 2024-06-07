import React from 'react'
import { Position, Winner } from '../../types'
import styles from './Message.module.css'

export type MessageProps = {
  message:
    | { gameState: 'BETTING' }
    | {
        gameState: 'PLAY'
        computerBet: Position
        userBets: Array<Position>
      }
    | {
        gameState: 'RESULT'
        amount: string
        winner: Winner
        userBetPosition: Position
      }
}

const Betting = () => (
  <div className={styles.Betting}>PICK YOUR 1 OR 2 POSITIONS</div>
)

const Play = (props: { computerBet: Position; userBets: Array<Position> }) => (
  <div className={styles.Play}>
    <span className={styles.Msg}>{props.computerBet}</span>
    <span className={styles.Vs}>&nbsp;&nbsp;&nbsp;vs&nbsp;&nbsp;&nbsp;</span>
    <span className={styles.Msg}>{props.userBets.join(' AND ')}</span>
  </div>
)

const Result = (props: {
  winner: Winner
  position: Position
  amount: string
}) => {
  const isPlayerWins = props.winner === 'PLAYER'
  const color = isPlayerWins ? styles.Green : styles.Red
  const message = `${props.position} ${isPlayerWins ? 'WON' : 'LOST'}`

  return (
    <div className={styles.Result}>
      <div className={color}>{message}</div>

      {isPlayerWins && (
        <div className={styles.Msg}>
          <span className={styles.Brown}>YOU WIN&nbsp;</span>
          <span className={styles.White}>{props.amount}</span>
        </div>
      )}
    </div>
  )
}

export const Message: React.FC<MessageProps> = props => {
  return (
    <div className={styles.Message}>
      {props.message.gameState === 'BETTING' && <Betting />}

      {props.message.gameState === 'PLAY' && (
        <Play
          computerBet={props.message.computerBet}
          userBets={props.message.userBets}
        />
      )}

      {props.message.gameState === 'RESULT' && (
        <Result
          winner={props.message.winner}
          position={props.message.userBetPosition}
          amount={props.message.amount}
        />
      )}
    </div>
  )
}
