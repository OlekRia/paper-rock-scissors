import React from 'react'
import { Position as PositionType } from '../../types'
import { Button } from '../atoms/Button'
import { Position } from '../molecules/Position'
import styles from './PlayZone.module.css'

export type MouseButton = 'LEFT' | 'RIGHT'

export type ClickPayload = {
  button: MouseButton
  type: PositionType
}

type PlayZoneProps = {
  bets: [number, number, number]
  buttonLabel: string
  children?: React.ReactNode
  onBetClick: (payload: ClickPayload) => void
  onButtonClick: () => void
}

export const PlayZone = (props: PlayZoneProps) => {
  const clickHandler = (type: PositionType) => {
    props.onBetClick({ type, button: 'LEFT' })
  }

  const contextMenuClickHandler = (type: PositionType) => {
    props.onBetClick({ type, button: 'RIGHT' })
  }

  const betAmount = props.bets[0] + props.bets[1] + props.bets[2]

  return (
    <div className={styles.PlayZone}>
      <div className={styles.Message}>{props.children}</div>

      <div className={styles.Positions}>
        <Position
          bet={props.bets[0]}
          positionTypes="PAPER"
          onClick={() => clickHandler('PAPER')}
          onContextMenu={() => contextMenuClickHandler('PAPER')}
        />

        <Position
          bet={props.bets[1]}
          positionTypes="ROCK"
          onClick={() => clickHandler('ROCK')}
          onContextMenu={() => contextMenuClickHandler('ROCK')}
        />

        <Position
          bet={props.bets[2]}
          positionTypes="SCISSORS"
          onClick={() => clickHandler('SCISSORS')}
          onContextMenu={() => contextMenuClickHandler('SCISSORS')}
        />
      </div>

      <div>
        <Button disabled={betAmount <= 0} onClick={props.onButtonClick}>
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  )
}
