import { formatNumberK } from '../../functional/formats'
import { Info } from '../atoms/Info'
import styles from './Header.module.css'

type HeaderProps = {
  balance: number
  bet: number
  win: number
}

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles.Header}>
      <span>
        <Info label="BALANCE" text={formatNumberK(props.balance)} />
      </span>

      <span>
        <Info label="BET" text={formatNumberK(props.bet)} />
      </span>

      <span>
        <Info label="WIN" text={formatNumberK(props.win)} />
      </span>
    </div>
  )
}
