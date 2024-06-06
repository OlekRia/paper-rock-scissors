import { Button } from './atomic/atoms/Button'
import { BaseLayout } from './atomic/templates/BaseLayout'
import { GameProvider } from './store'

const App = () => {
  return (
    <GameProvider>
      <BaseLayout
        header={<div>Header</div>}
        playZone={
          <div>
            <Button onClick={() => {}}>PLAY</Button>
          </div>
        }
      />
    </GameProvider>
  )
}

export default App
