import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr } from '../../tests/testUtils'
import GuessedWords from './GuessedWords'

const setup = (props = {}) => {
  return shallow(<GuessedWords {...props} />)
}

test('Renders without errors', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-guessed-words')
  expect(component.length).toBe(1)
})

describe('If there are no guesses', () => {
  test('Renders instructions to guess a word at initial load', () => {
    const wrapper = setup()
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })

  test('Does not render "guessed words" section', () => {
    const wrapper = setup()
    const guessedWords = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWords.length).toBe(0)
  })
})

describe('If there are guesses', () => {
  let wrapper: ShallowWrapper
  let guesses: Guess[]
  beforeEach(() => {
    guesses = [
      { word: 'train', letterMatches: 3 },
      { word: 'agile', letterMatches: 1 },
      { word: 'party', letterMatches: 5 },
    ]
    wrapper = setup({ guesses })
  })

  test('Renders "guessed words" section', () => {
    const guessesNode = findByTestAttr(wrapper, 'guesses')
    expect(guessesNode.length).toBe(1)
  })

  test('Renders the correct number of guesses', () => {
    const guessNode = findByTestAttr(wrapper, 'guess')
    expect(guessNode.length).toBe(guesses.length)
  })
})
