import { ShallowWrapper } from 'enzyme'

export const findByTestAttr = (
  wrapper: ShallowWrapper,
  search: string
): ShallowWrapper => {
  return wrapper.find(`[data-test="${search}"]`)
}
