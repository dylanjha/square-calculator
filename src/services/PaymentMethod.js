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

  getTotal (amount) {
    const fee = roundTwo((amount * this.rate) + (this.flat))
    const netAmount = roundTwo(amount - fee)
    return { fee, netAmount }
  }

  feeToHuman () {
    let str = roundTwo(this.rate * 100) + '%'
    if (this.flat) {
      str += (` + $${roundTwo(this.flat)}`)
    }
    return str
  }
}
