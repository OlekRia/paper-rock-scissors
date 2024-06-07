import { GamePage } from './atomic/pages/GamePage'
import { GameProvider } from './store'

const App = () => {
  return (
    <GameProvider>
      <GamePage />
    </GameProvider>
  )
}

export default App
