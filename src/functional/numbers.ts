import { Position } from '../types'

const ORDERED_POSITIONS: Position[] = ['PAPER', 'ROCK', 'SCISSORS']

/* return 1 if x > 0, 0 otherwise */
export const oneIfExists = (x: number) => (x > 0 ? 1 : 0)

/* return a random position (of three)*/
export const randomPosition = () =>
  ORDERED_POSITIONS[Math.floor(Math.random() * 3)]
