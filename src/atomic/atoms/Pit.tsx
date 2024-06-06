import { Position } from '../../types'
import styles from './Pit.module.css'

type PitProps = {
  positionType: Position
  children: React.ReactNode
}

export const Pit = (props: PitProps) => {
  return (
    <div className={`${styles.Pit} ${styles[props.positionType]}`}>
      <div className={styles.Bet}>{props.children}</div>
      <div className={styles.Label}>{props.positionType}</div>
    </div>
  )
}
