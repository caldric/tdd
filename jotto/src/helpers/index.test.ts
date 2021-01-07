import { getLetterMatchCount } from './'
const secretWord = 'party'

describe('getLetterMatchCount', () => {
  test('Returns correct count when there are no matching letters', () => {
    const result = getLetterMatchCount('bones', secretWord)
    expect(result).toBe(0)
  })
})
