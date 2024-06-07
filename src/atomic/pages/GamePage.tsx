import { useContext } from 'react'
import { Message } from '../atoms/Message'
import { Header } from '../molecules/Header'
import { ClickPayload, PlayZone } from '../organisms/PlayZone'
import { BaseLayout } from '../templates/BaseLayout'
import { GameContext, GameContextProps } from '../../store'

const buttonText: Record<string, string> = {
  BETTING: 'PLAY',
  PLAY: 'PLAY',
  RESULT: 'CLEAR',
}

export const GamePage = () => {
  const { dispatch, state }: GameContextProps = useContext(GameContext)!

  const betClickHandler = ({ button, type }: ClickPayload) => {
    if (button === 'LEFT') {
      dispatch({ type: 'BETTING_INCREASE', payload: type })
    } else if (button === 'RIGHT') {
      dispatch({ type: 'BETTING_CLEANUP', payload: type })
    }
  }

  const buttonClickHandler = () => {
    console.log('main button clicked')
  }

  return (
    <BaseLayout
      header={
        <Header balance={state.balance} bet={state.bet} win={state.win} />
      }
      playZone={
        <PlayZone
          bets={[state.paper, state.rock, state.scissors]}
          buttonLabel={buttonText[state.gameState]}
          onBetClick={betClickHandler}
          onButtonClick={buttonClickHandler}
        >
          <Message message={{ gameState: 'BETTING' }} />
        </PlayZone>
      }
    />
  )
}
