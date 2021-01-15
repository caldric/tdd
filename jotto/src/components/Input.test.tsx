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
  test('Submitting form calls action creator', () => {
    // Create mock action creator function
    const guessMock = jest.fn()
    const props = { success: false, guess: guessMock }

    // Create wrapper
    const wrapper = shallow(<UInput {...props} />)

    // Simulate form submission
    const form = findByTestAttr(wrapper, 'guess-form')
    form.simulate('submit', { preventDefault: () => {} })

    // Check if action creator has been called exactly once
    const guessCallCount: number = guessMock.mock.calls.length
    expect(guessCallCount).toBe(1)
  })

  test('Action creator runs with correct argument', () => {
    // Create mock action creator function
    const guessMock = jest.fn()
    const props = { success: false, guess: guessMock }

    // Create wrapper
    const wrapper = shallow(<UInput {...props} />)

    // Simulate user typing into the text box
    const word = 'agile'
    const input = findByTestAttr(wrapper, 'input-box')
    input.simulate('change', { target: { value: word } })

    // Simulate form submission
    const form = findByTestAttr(wrapper, 'guess-form')
    form.simulate('submit', { preventDefault: () => {} })

    // Check if action creator has been called exactly once
    expect(guessMock).toHaveBeenCalledWith(word)
  })
})
