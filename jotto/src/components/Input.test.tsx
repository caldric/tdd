import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, storeFactory } from '../../tests/testUtils'
import Input from './Input'

const setup = (initialState: RootState) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive()
  // console.log(wrapper.debug()) // for debugging purposes
  return wrapper
}
// setup({ success: false }) // for debugging purposes

test('Renders component without errors', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-input')
  expect(component.length).toBe(1)
})
