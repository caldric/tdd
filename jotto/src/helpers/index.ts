export const getLetterMatchCount = (guess: string, secret: string): number => {
  const secretLetters: Set<string> = new Set(secret.split(''))
  const guessLetters: Set<string> = new Set(guess.split(''))
  const matchingLetters: string[] = Array.from(secretLetters).filter((letter) =>
    guessLetters.has(letter)
  )
  return matchingLetters.length
}
