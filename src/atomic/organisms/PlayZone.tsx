import { Position as PositionType } from '../../types'
import styles from './PlayZone.module.css'
import { Position } from '../molecules/Position'

type PositionProps = {
  bet: number
  positionTypes: PositionType
  onClick: () => void
}

export const PlayZone = (props: PositionProps) => {
  return <div className={styles.PlayZone}></div>
}
