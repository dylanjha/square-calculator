import React, { Component } from 'react'
import MethodDetails from './MethodDetails'
import CalculatorForm from './CalculatorForm'
import IntroNotice from './IntroNotice'
import Results from './Results'
import { PaymentMethod } from '../services/PaymentMethod'

const defaultState = {
  method: '',
  country: 'US',
  amount: 0
}

class FeeCalulator extends Component {
  constructor (props) {
    super(props)
    this.state = defaultState
  }

  onChange (event) {
    const target = event.target
    // reset the form and set back to default state when toggling country
    if (target.name === 'country') {
      target.form.reset()
      return this.setState(Object.assign({}, defaultState, {country: target.value}))
    }
    let value = target.type === 'number' ? Number(target.value) : target.value
    const set = {}
    // target.name should be the 'name' of the input from the form:
    //   expected: 'method' 'amount' 'country'
    if (!['method', 'amount', 'country'].includes(target.name)) {
      throw new Error(`Unexpected onChange target name: ${target.name}`)
    }
    set[target.name] = value
    this.setState(set)
  }

  render () {
    console.log('debug:rendering state:', this.state)
    let paymentMethod
    if (this.state.country && this.state.method && this.state.amount) {
      paymentMethod = new PaymentMethod(this.state.country, this.state.method)
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Square Fee Calculator</h2>
            <IntroNotice />
            <CalculatorForm onChange={this.onChange.bind(this)} country={this.state.country} amount={this.state.amount} method={this.state.method} />
            <Results amount={this.state.amount} country={this.state.country} paymentMethod={paymentMethod} />
            <MethodDetails country={this.state.country} method={this.state.method} />
          </div>
        </div>
      </div>
    )
  }
}

export default FeeCalulator
