import styles from './Chip.module.css'

type ChipProps = {
  number: number
}

export const Chip = (props: ChipProps) => {
  return (
    <div className={styles.Chip}>
      <span className={styles.Number}>{props.number}</span>
    </div>
  )
}
