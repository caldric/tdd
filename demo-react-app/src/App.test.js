import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Renders <App /> without errors', () => {
  // Do a shallow rendering of the App component
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy()
})
