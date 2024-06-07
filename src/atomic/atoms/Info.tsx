import styles from './Info.module.css'

type InfoProps = {
  label: string
  text: string
}

export const Info = (props: InfoProps) => {
  return (
    <div className={styles.Info}>
      <div className={styles.Label}>{props.label}: &nbsp;</div>
      <div className={styles.Text}>{props.text}</div>
    </div>
  )
}
