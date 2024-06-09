import React from 'react'
import { MessageType, Position, Winner } from '../../types'
import styles from './Message.module.css'

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
  let isPlayerWins = false
  let color = styles.Draw
  let message = 'IT IS A DRAW'

  if (props.winner !== 'DRAW') {
    isPlayerWins = props.winner === 'PLAYER'
    color = isPlayerWins ? styles.Green : styles.Red
    message = `${props.position} ${isPlayerWins ? 'WON' : 'LOST'}`
  }

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

export const Message: React.FC<MessageType> = props => {
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
