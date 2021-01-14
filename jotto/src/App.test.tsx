import React from 'react'
import { shallow } from 'enzyme'

import { RootState } from './store'
import { storeFactory } from '../tests/testUtils'
import App from './App'

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
    const wrapper = setup({ guesses: {}, secret: '', success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })
  test('Has access to secret state', () => {})
  test('Has access to guesses state', () => {})
})
