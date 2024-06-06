import { Position as PositionType } from '../../types'
import { Chip } from '../atoms/Chip'
import { Pit } from '../atoms/Pit'
import styles from './Position.module.css'

type PositionProps = {
  bet: number
  positionTypes: PositionType
  onClick: () => void
  onContextMenu: () => void
}

export const Position = (props: PositionProps) => {
  const contextMenuOpenHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (props.onContextMenu) {
      props.onContextMenu()
    }
  }

  return (
    <div
      className={styles.Position}
      onClick={props.onClick}
      onContextMenu={contextMenuOpenHandler}
    >
      <Pit positionType={props.positionTypes}>
        {props.bet > 0 && <Chip number={props.bet} />}
      </Pit>
    </div>
  )
}
