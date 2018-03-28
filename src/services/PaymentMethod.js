import { roundTwo } from './mathUtils'
import { US_METHODS, CA_METHODS } from './METHODS'

function getMethodsForCountry (country) {
  let methods
  switch (country) {
    case 'US':
      methods = US_METHODS
      break
    case 'CA':
      methods = CA_METHODS
      break
    default:
      throw new Error('Missing country')
  }
  return methods
}

export class PaymentMethod {
  static allForCountry (country) {
    const methods = getMethodsForCountry(country)
    return Object.keys(methods).map((id) => {
      return new PaymentMethod(country, id)
    })
  }

  constructor (country, id) {
    const methods = getMethodsForCountry(country)
    if (!methods) throw new Error(`Missing country ${country}`)
    const attrs = methods[id]
    if (!attrs) throw new Error(`Missing payment method: ${id}`)
    this.id = id
    Object.keys(attrs).forEach((attr) => {
      this[attr] = attrs[attr]
    })
  }

  getCalculations (amount) {
    const percentFee = this.getPercentFee(amount)
    const amountAfterPercentFee = roundTwo(amount - percentFee)

    return {
      saleAmt: `$${roundTwo(amount)}`,
      percentFeeLabel: `${roundTwo(amount)} * ${this.rate} =`,
      percentFeeAmount: `- ${roundTwo(percentFee)}`,
      amountAfterPercentFee: `$${roundTwo(amountAfterPercentFee)}`,
      flatFeeLabel: `$${roundTwo(this.flat)}`,
      flatFeeAmount: `- ${roundTwo(this.flat)}`,
      totalFee: roundTwo(this.getFee(amount)),
      netAmount: `$${this.getNetAmount(amount)}`,
    }
  }

  getPercentFee (amount) {
    return amount * this.rate
  }

  getFee (amount) {
    const percentFee = this.getPercentFee(amount)
    return percentFee + (this.flat)
  }

  getNetAmount (amount) {
    const fee = this.getFee(amount)
    return roundTwo(amount - fee)

  }

  feeToHuman () {
    let str = roundTwo(this.rate * 100) + '%'
    if (this.flat) {
      str += (` + $${roundTwo(this.flat)}`)
    }
    return str
  }
}
