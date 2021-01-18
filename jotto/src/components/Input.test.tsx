import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { RootState } from '../store'
import { findByTestAttr, storeFactory } from '../../tests/testUtils'
import Input, { Input as UInput } from './Input'

const setup = (initialState: RootState | undefined) => {
  const store = storeFactory(initialState)
  // @ts-expect-error
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive()
  // console.log(wrapper.debug()) // for debugging purposes
  return wrapper
}
// setup({ success: false }) // for debugging purposes

describe('No guesses have been made', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ success: false, secret: '', guesses: {} })
  })

  test('Renders component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('Renders input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.length).toBe(1)
  })

  test('Renders submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.length).toBe(1)
  })
})

describe('Word has been guessed successfully', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ success: true, secret: '', guesses: {} })
  })

  test('Renders component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('Does not render input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.length).toBe(0)
  })

  test('Does not render submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.length).toBe(0)
  })
})

describe('Redux props', () => {
  test('Has success state as a prop', () => {
    const success = true
    const wrapper = setup({ guesses: {}, secret: '', success })
    // @ts-expect-error
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('guessWord action creator is a function prop', () => {
    const wrapper = setup(undefined)
    // @ts-expect-error
    const guessWordProp = wrapper.instance().props.guess
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('Guess word form', () => {
  let guessMock: jest.Mock<any, any>
  let props: { success: boolean; guess: (word: string) => void }
  let wrapper: ShallowWrapper
  let form: ShallowWrapper

  beforeEach(() => {
    // Create mock action creator function
    guessMock = jest.fn()
    props = { success: false, guess: guessMock }

    // Create wrapper
    wrapper = shallow(<UInput {...props} />)

    // Form
    form = findByTestAttr(wrapper, 'guess-form')
  })

  test('Submitting form with blank input does not call action creator', () => {
    // Submit form and check how many times action creator was called
    form.simulate('submit', { preventDefault: () => {} })
    expect(guessMock.mock.calls).toHaveLength(0)
  })

  describe('Submitting form with a non-empty input', () => {
    let word: string
    let input: ShallowWrapper

    beforeEach(() => {
      // Simulate user typing into the text box
      word = 'agile'
      input = findByTestAttr(wrapper, 'input-box')
      input.simulate('change', { target: { value: word } })

      // Simulate form submission
      form.simulate('submit', { preventDefault: () => {} })
    })

    test('Calls action creator once', () => {
      // Check how many times the action creator was called
      expect(guessMock.mock.calls).toHaveLength(1)
    })

    test('Action creator runs with the correct argument', () => {
      // Check if action creator has an argument of word
      expect(guessMock).toHaveBeenCalledWith(word)
    })

    test('Input box returns to empty after submit is clicked', () => {
      // Check if "word" state has a value of empty string after submission
      expect(wrapper.state('word')).toBe('')
    })
  })
})
