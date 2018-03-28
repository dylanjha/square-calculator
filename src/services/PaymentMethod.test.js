/* eslint-env jest */

import { PaymentMethod } from './PaymentMethod'

describe('PaymentMethod', () => {
  describe('init', () => {
    it('should throw if missing id', () => {
      const init = () => new PaymentMethod('US', 'nonexistant')
      expect(init).toThrow(/Missing payment method/)
    })

    it('should the the attrs', () => {
      const paymentMethod = new PaymentMethod('US', 'manual')
      expect(paymentMethod.id).toEqual('manual')
      expect(paymentMethod.rate).toEqual(0.035)
      expect(paymentMethod.flat).toEqual(0.15)
      expect(paymentMethod.name).toEqual('manual entry (pos & Square Register)')
    })
  })

  describe('feeToHuman', () => {
    it('should return the correct string if there is no flat fee', () => {
      const manual = new PaymentMethod('US', 'swipe/chip/contactless-pos')
      expect(manual.feeToHuman()).toEqual('2.75%')
    })

    it('should return the correct string if there is a flat fee', () => {
      const manual = new PaymentMethod('US', 'manual')
      expect(manual.feeToHuman()).toEqual('3.50% + $0.15')
    })
  })

  describe('calculations', () => {
    let paymentMethod1
    let paymentMethod2

    beforeEach(() => {
      paymentMethod1 = new PaymentMethod('US', 'swipe/chip/contactless-pos')
      paymentMethod2 = new PaymentMethod('US', 'manual')
    })

    describe('getPercentFee', () => {
      it('should return the percent fee', () => {
        expect(paymentMethod1.getPercentFee(10)).toEqual(0.275)
        expect(
          Number(paymentMethod2.getPercentFee(10).toFixed(2))
        ).toEqual(0.35)
      })
    })

    describe('getFee', () => {
      it('should return the full fee', () => {
        expect(paymentMethod1.getFee(10)).toEqual(0.275)
        expect(paymentMethod2.getFee(10)).toEqual(0.5)
      })
    })

    describe('getNetAmount', () => {
      it('should get the net amount', () => {
        expect(paymentMethod1.getNetAmount(10)).toEqual('9.73')
        expect(paymentMethod2.getNetAmount(10)).toEqual('9.50')
      })
    })

    describe('getCalculations', () => {
      it('should get the net amount', () => {
        expect(paymentMethod1.getCalculations(10)).toEqual({
           amountAfterPercentFee: '$9.73',
           flatFeeAmount: '- 0.00',
           flatFeeLabel: '$0.00',
           netAmount: '$9.73',
           percentFeeAmount: '- 0.28',
           percentFeeLabel: '10.00 * 0.0275 =',
           saleAmt: '$10.00',
           totalFee: '0.28'
        })
        expect(paymentMethod2.getCalculations(10)).toEqual({
           amountAfterPercentFee: '$9.65',
           flatFeeAmount: '- 0.15',
           flatFeeLabel: '$0.15',
           netAmount: '$9.50',
           percentFeeAmount: '- 0.35',
           percentFeeLabel: '10.00 * 0.035 =',
           saleAmt: '$10.00',
           totalFee: '0.50'
        })
      })
    })
  })
})
