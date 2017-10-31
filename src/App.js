import React, { Component } from 'react'
import MethodDetails from './components/MethodDetails'
import CalculatorForm from './components/CalculatorForm'
import { PaymentMethod } from './services/PaymentMethod'
import './App.css'

const defaultState = {
  method: '',
  country: 'US',
  amount: 0
}

class App extends Component {
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
    let totals = {fee: 0, netAmount: 0}
    if (this.state.country && this.state.method && this.state.amount) {
      const paymentMethod = new PaymentMethod(this.state.country, this.state.method)
      totals = paymentMethod.getTotal(this.state.amount)
    }

    return (
      <div className='container' style={{marginTop: '40px'}}>
        <div className='row'>
          <div className='col'>
            <h2>Fee Calculator</h2>
            <CalculatorForm onChange={this.onChange.bind(this)} country={this.state.country} amount={this.state.amount} method={this.state.method} />
            <div className='results'>
              <div> { this.state.country } (country) </div>
              <div>
                <span>{totals.fee} </span><span className='fee'>fee</span>
              </div>
              <div>
                <span>{totals.netAmount} </span><span className='net-amount'>amount after fee</span>
              </div>
            </div>
            <MethodDetails country={this.state.country} method={this.state.method} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
