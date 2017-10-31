import { roundTwo } from './mathUtils'
import { METHODS } from './METHODS'

export class PaymentMethod {
  static all () {
    return Object.keys(METHODS).map((id) => {
      return new PaymentMethod(id)
    })
  }

  constructor (id) {
    const attrs = METHODS[id]
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
