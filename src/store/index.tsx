import React, {
  createContext,
  useReducer,
  PropsWithChildren,
  useMemo,
  Dispatch,
} from 'react'
import { gameReducer, initialState } from './state'
import { ActionType, StateType } from '../types'

type GameContextProps = {
  state: StateType
  dispatch: Dispatch<ActionType>
}

export const GameContext = createContext<GameContextProps | undefined>(
  undefined
)

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  )
}
