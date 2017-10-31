/* eslint-env jest */

import { PaymentMethod } from './PaymentMethod'

describe('PaymentMethod', () => {
  describe('init', () => {
    it('should throw if missing id', () => {
      const init = () => new PaymentMethod('nonexistant')
      expect(init).toThrow(/Missing payment method/)
    })

    it('should the the attrs', () => {
      const paymentMethod = new PaymentMethod('manual')
      expect(paymentMethod.id).toEqual('manual')
      expect(paymentMethod.rate).toEqual(0.035)
      expect(paymentMethod.flat).toEqual(0.15)
      expect(paymentMethod.name).toEqual('manual entry (pos & register)')
    })
  })

  describe('feeToHuman', () => {
    it('should return the correct string if there is no flat fee', () => {
      const manual = new PaymentMethod('swipe/chip/contactless-pos')
      expect(manual.feeToHuman()).toEqual('2.75%')
    })

    it('should return the correct string if there is a flat fee', () => {
      const manual = new PaymentMethod('manual')
      expect(manual.feeToHuman()).toEqual('3.50% + $0.15')
    })
  })

  describe('getTotal', () => {
    it('should return the correct string if there is no flat fee', () => {
      const manual = new PaymentMethod('swipe/chip/contactless-pos')
      expect(manual.getTotal(10)).toEqual({
        fee: '0.28',
        netAmount: '9.72'
      })
    })

    it('should return the correct string if there is a flat fee', () => {
      const manual = new PaymentMethod('manual')
      expect(manual.getTotal(12)).toEqual({
        fee: '0.57',
        netAmount: '11.43'
      })
    })
  })
})
