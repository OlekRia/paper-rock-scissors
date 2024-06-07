import { Message } from './atomic/atoms/Message'
import { Header } from './atomic/molecules/Header'
import { ClickPayload, PlayZone } from './atomic/organisms/PlayZone'
import { BaseLayout } from './atomic/templates/BaseLayout'
import { GameProvider } from './store'

const App = () => {
  const betClickHandler = (payload: ClickPayload) => {
    console.log(payload)
  }

  const buttonClickHandler = () => {
    console.log('main button clicked')
  }

  return (
    <GameProvider>
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
    </GameProvider>
  )
}

export default App
