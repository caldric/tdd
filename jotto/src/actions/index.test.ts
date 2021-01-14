import moxios from 'moxios'
import { storeFactory } from '../../tests/testUtils'
import { getSecret } from './'

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('Adds secret word to state when requested', async () => {
    const secret = 'party'
    const store = storeFactory({ guesses: {}, success: false, secret: '' })

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({ status: 200, response: secret })
    })

    // @ts-ignore
    await store.dispatch(getSecret())
    const { secret: result } = store.getState()
    expect(result).toBe(secret)
  })
})
