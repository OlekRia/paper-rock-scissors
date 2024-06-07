import { useContext } from 'react'
import { Message } from '../atoms/Message'
import { Header } from '../molecules/Header'
import { ClickPayload, PlayZone } from '../organisms/PlayZone'
import { BaseLayout } from '../templates/BaseLayout'
import { GameContext } from '../../store'

export const GamePage = () => {
  const data = useContext(GameContext)

  console.log(data)

  //
  const betClickHandler = (payload: ClickPayload) => {
    console.log(payload)
  }

  const buttonClickHandler = () => {
    console.log('main button clicked')
  }

  return (
    <BaseLayout
      header={<Header balance={5000} bet={500} win={0} />}
      playZone={
        <PlayZone
          bets={[0, 500, 1500]}
          buttonLabel="PLAY"
          onBetClick={betClickHandler}
          onButtonClick={buttonClickHandler}
        >
          <Message message={{ gameState: 'BETTING' }} />
        </PlayZone>
      }
    />
  )
}
