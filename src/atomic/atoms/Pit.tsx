import { Position } from '../../types'
import styles from './Pit.module.css'

type PitProps = {
  bet: number
  positionType: Position
  children: React.ReactNode
  onClick: () => void
}

export const Pit = (props: PitProps) => {
  console.log(props)
  return (
    <div className={`${styles.Pit} ${styles[props.positionType]}`}>
      <div className={styles.Bet}>{props.children}</div>
      <div className={styles.Label}>{props.positionType}</div>
    </div>
  )
}
