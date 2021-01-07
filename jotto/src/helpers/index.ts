export const getLetterMatchCount = (guess: string, secret: string): number => {
  // Initialize tracking variables
  let matchingLetters = 0
  const letters: any = {}

  // Find the letter frequencies of the secret word
  for (const char of secret) {
    letters[char] = letters[char] + 1 || 1
  }

  // Count the letter matches between the guess and secret words
  for (const char of guess) {
    if (letters[char]) {
      letters[char] -= 1
      matchingLetters += 1
    }
  }

  // Return value
  return matchingLetters
}
