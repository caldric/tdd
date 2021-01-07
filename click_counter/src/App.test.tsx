import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<App />', () => {
  const findByTestAttr = (
    wrapper: Enzyme.ShallowWrapper,
    search: string
  ): Enzyme.ShallowWrapper => wrapper.find(`[data-test='${search}']`)

  let wrapper: Enzyme.ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('Renders without errors', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
  })

  describe('Counter', () => {
    test('Renders display', () => {
      const counterDisplay = findByTestAttr(wrapper, 'counter-display')
      expect(counterDisplay.length).toBe(1)
    })

    test('Starts at 0', () => {
      const counter = findByTestAttr(wrapper, 'counter')
      expect(counter.text()).toBe('0')
    })
  })

  describe('Increment counter button', () => {
    test('Renders without errors', () => {
      const incrementButton = findByTestAttr(wrapper, 'increment-button')
      expect(incrementButton.length).toBe(1)
    })

    test('Clicks increment the counter by 1', () => {
      // Find and click the increment button
      const incrementButton = findByTestAttr(wrapper, 'increment-button')
      incrementButton.simulate('click')

      // Find the counter, and test that the number has been incremented by 1
      const counter = findByTestAttr(wrapper, 'counter')
      expect(counter.text()).toBe('1')
    })

    test("Clicks clear the decrement error message if it's present", () => {
      // Generate the error message from clicking the decrement button
      const decrementButton = findByTestAttr(wrapper, 'decrement-button')
      decrementButton.simulate('click')

      // Find and click the increment button
      const incrementButton = findByTestAttr(wrapper, 'increment-button')
      incrementButton.simulate('click')

      // Check that the error message has been cleared
      const decrementError = findByTestAttr(wrapper, 'decrement-error')
      expect(decrementError.length).toBe(0)
    })
  })

  describe('Decrement counter button', () => {
    test('Renders without errors', () => {
      const decrementButton = findByTestAttr(wrapper, 'decrement-button')
      expect(decrementButton.length).toBe(1)
    })

    test("Clicks decrements the counter if it's positive", () => {
      // Increment the counter by 1
      const incrementButton = findByTestAttr(wrapper, 'increment-button')
      incrementButton.simulate('click')

      // Decrement the counter by 1
      const decrementButton = findByTestAttr(wrapper, 'decrement-button')
      decrementButton.simulate('click')

      // Check if the counter is 0
      const counter = findByTestAttr(wrapper, 'counter')
      expect(counter.text()).toBe('0')
    })

    test('Clicks do not let the counter go negative', () => {
      // Find and click the decrement button
      const decrementButton = findByTestAttr(wrapper, 'decrement-button')
      decrementButton.simulate('click')

      // Check if the counter is still 0
      const counter = findByTestAttr(wrapper, 'counter')
      expect(counter.text()).toBe('0')
    })

    test('Renders an error message when clicking while the counter is at 0', () => {
      // Find and click the decrement button
      const decrementButton = findByTestAttr(wrapper, 'decrement-button')
      decrementButton.simulate('click')

      // Check whether an error message has been rendered
      const decrementError = findByTestAttr(wrapper, 'decrement-error')
      expect(decrementError.length).toBe(1)
    })

    test('Error message is not present at initial load', () => {
      const decrementError = findByTestAttr(wrapper, 'decrement-error')
      expect(decrementError.length).toBe(0)
    })
  })
})
