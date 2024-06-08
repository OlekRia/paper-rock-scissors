import styles from './Button.module.css'

type ButtonProps = {
  disabled?: boolean
  children: string
  onClick: () => void
}

export const Button = ({
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={styles.Button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
