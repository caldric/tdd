import { getLetterMatchCount } from './'
const secretWord = 'party'

describe('getLetterMatchCount', () => {
  test('Returns correct count when there are no matching letters', () => {
    const result = getLetterMatchCount('bones', secretWord)
    expect(result).toBe(0)
  })

  test('Returns the correct count with 3 matching letters', () => {
    const result = getLetterMatchCount('train', secretWord)
    expect(result).toBe(3)
  })
})
