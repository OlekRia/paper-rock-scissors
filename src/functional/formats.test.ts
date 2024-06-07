import { formatNumberK } from './formats'

describe('formatNumberK', () => {
  test('< 1000', () => {
    expect(formatNumberK(500)).toBe('500')
  })

  test('1000', () => {
    expect(formatNumberK(1000)).toBe('1k')
  })

  test('> 1000', () => {
    expect(formatNumberK(1500)).toBe('1.5k')
    expect(formatNumberK(5000)).toBe('5k')
    expect(formatNumberK(50_000)).toBe('50k')
    expect(formatNumberK(5_000_000)).toBe('5000k')
  })
})
