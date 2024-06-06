import './Button.module.css'
import styles from './Button.module.css'

type ButtonProps = {
  children: string
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      {children}
    </button>
  )
}
