import styles from './Info.module.css'

type InfoProps = {
  label: string
  text: string
}

export const Info = (props: InfoProps) => {
  return (
    <div>
      <span className={styles.Label}>{props.label}: &nbsp;</span>
      <span className={styles.Text}>{props.text}</span>
    </div>
  )
}
