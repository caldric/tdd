import React from 'react'
import { shallow } from 'enzyme'

import { RootState } from './store'
import { storeFactory } from '../tests/testUtils'
import App from './App'

const defaultState = { guesses: {}, secret: '', success: false }

const setup = (initialState: RootState | undefined) => {
  const store = storeFactory(initialState)
  // @ts-expect-error
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive()
  return wrapper
}

describe('Redux properties', () => {
  test('Has access to success state', () => {
    const success = true
    const wrapper = setup({ ...defaultState, success })
    // @ts-expect-error
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('Has access to secret state', () => {
    const secret = 'party'
    const wrapper = setup({ ...defaultState, secret })
    // @ts-expect-error
    const secretProp = wrapper.instance().props.secret
    expect(secretProp).toBe(secret)
  })

  test('Has access to guesses state', () => {
    const guesses: Record<string, Guess> = {
      agile: { word: 'agile', letterMatches: 1 },
    }
    const wrapper = setup({ ...defaultState, guesses })
    // @ts-expect-error
    const guessesProp = wrapper.instance().props.guesses
    expect(guessesProp).toBe(guesses)
  })

  test('getSecret action creator is a function on the props', () => {
    const wrapper = setup(undefined)
    // @ts-expect-error
    const getSecretProp = wrapper.instance().props.getSecret
    expect(getSecretProp).toBeInstanceOf(Function)
  })
})
