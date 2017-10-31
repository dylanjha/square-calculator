import React, { Component } from 'react'
import { PaymentMethod } from '../services/PaymentMethod'

class CalculatorForm extends Component {
  constructor (props) {
    super(props)
    const initialAmount = 0
    const initialPaymentMethod = PaymentMethod.all()[0]
    this.amount = initialAmount
    this.paymentMethod = initialPaymentMethod
    this.state = {
      fee: 0,
      netAmount: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target
    let value = target.type === 'number' ? Number(target.value) : target.value
    if (target.id === 'amount') {
      this.amount = Number(value)
    }
    if (target.id === 'method') {
      this.paymentMethod = new PaymentMethod(target.value)
    }

    if (this.amount <= 0) {
      this.setState({ fee: 0, netAmount: 0 })
      return console.warn('Enter amount > 0')
    }

    const total = this.paymentMethod.getTotal(this.amount)
    this.setState({
      fee: total.fee,
      netAmount: total.netAmount
    })
    event.preventDefault()
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    const options = PaymentMethod.all().map((method) => {
      return <option key={method.id} value={method.id}>{method.name}</option>
    })
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='method'>
            Method
          </label>
          <select id='method' className='form-control' onChange={this.handleChange} name='method' defaultValue={this.paymentMethod.id}>
            {options}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>
            Sale Amount
          </label>
          <input id='amount' type='number' className='form-control' onChange={this.handleChange} name='amount' defaultValue={this.amount} />
        </div>
        <div className='results'>
          <div>
            <span>{this.state.fee} </span><span className='fee'>fee</span>
          </div>
          <div>
            <span>{this.state.netAmount} </span><span className='net-amount'>amount after fee</span>
          </div>
        </div>
      </form>
    )
  }
}

export default CalculatorForm
