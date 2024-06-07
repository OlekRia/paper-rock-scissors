import { formatNumberK } from '../../functional/formats'
import styles from './Chip.module.css'

type ChipProps = {
  number: number
}

export const Chip = (props: ChipProps) => {
  const strNumber = formatNumberK(props.number)

  return (
    <div className={styles.Chip}>
      <span className={styles.Number}>{strNumber}</span>
    </div>
  )
}
