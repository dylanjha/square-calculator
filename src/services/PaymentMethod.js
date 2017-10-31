const METHODS = {
  'swipe/chip': {rate: 0.0275, flat: 0},
  manual: {rate: 0.035, flat: 0.15},
  invoice: {rate: 0.029, flat: 0.30},
  'invoice card on file': {rate: 0.035, flat: 0.15}
}

export class PaymentMethod {
  static allIds () {
    return Object.keys(METHODS)
  }

  constructor (id) {
    this.props = METHODS[id]
    if (!this.props) throw new Error(`Missing payment method: ${id}`)
  }
}
