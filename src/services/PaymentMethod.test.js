/* eslint-env jest */

import { PaymentMethod } from './PaymentMethod'

describe('PaymentMethod', () => {
  describe('init', () => {
    it('should throw if missing id', () => {
      const init = () => new PaymentMethod('nonexistant')
      expect(init).toThrow(/Missing payment method/)
    })
  })
})
