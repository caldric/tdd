import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr } from '../../tests/testUtils'
import Congrats from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('Renders without errors', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('Renders no text when "success" prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})
