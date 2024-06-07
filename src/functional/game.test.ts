import { State } from '../types'
import { increaseBet } from './game'

const state: State = {
  balance: 5000,
  bet: 0,
  win: 0,
  rock: 0,
  paper: 0,
  scissors: 0,
  gameState: 'BETTING',
}

describe('Game', () => {
  test('IncreaseBet: When balance is not enough', () => {
    let s = increaseBet({ ...state, balance: 100 }, 'ROCK')
    expect(s.rock).toBe(0)
    expect(s.paper).toBe(0)
    expect(s.scissors).toBe(0)
    expect(s.balance).toBe(100)

    s = increaseBet({ ...state, balance: 500 }, 'ROCK')
    expect(s.balance).toBe(0)
  })

  test('IncreaseBet: No more 2 positions should be allowed', () => {
    let s = { ...state, balance: 5000, rock: 0, paper: 0, scissors: 0 }

    s = increaseBet(s, 'ROCK')
    expect(s.rock).toBe(500)
    expect(s.balance).toBe(4500)

    s = increaseBet(s, 'PAPER')
    expect(s.paper).toBe(500)
    expect(s.balance).toBe(4000)

    s = increaseBet(s, 'SCISSORS')
    expect(s.scissors).toBe(0)
    expect(s.balance).toBe(4000)
  })
})
