import React, { Component } from 'react'
import { roundTwo } from '../services/mathUtils'

const defaultState = {
  paymentsAmount: '',
  numberManual: ''
}

class FeesDifferenceCalculator extends Component {
  constructor (props) {
    super(props)
    this.state = Object.assign({}, defaultState)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  handleChange (event) {
    const target = event.target
    let value = target.type === 'number' ? Number(target.value) : target.value
    const set = {}
    set[target.name] = value
    this.setState(set)
  }

  get cpFees () {
    const { paymentsAmount } = this.state
    return roundTwo(paymentsAmount * 0.0275)
  }

  get cnpFees () {
    const { paymentsAmount, numberManual } = this.state
    const variable = paymentsAmount * 0.035
    const flat = numberManual * 0.15
    return roundTwo(variable + flat)
  }

  get difference () {
    return roundTwo(this.cnpFees - this.cpFees)
  }

  get renderResults () {
    const { paymentsAmount, numberManual } = this.state
    if (!(paymentsAmount && numberManual)) return null
    return (
      <div className='row results clearfix'>
        <div className='col'>
          <div className='result-line'>
            <div className='result-label'>
              CP Fees (2.75%)
            </div>
            <div className='result-number'>
              {this.cpFees}
            </div>
          </div>
          <div className='result-line'>
            <div className='result-label'>
              CNP Fees (3.5% + .15)
            </div>
            <div className='result-number'>
              {this.cnpFees}
            </div>
          </div>
          <div className='result-line strong'>
            <div className='result-label'>
              Difference
            </div>
            <div className='result-number'>
              {this.difference}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { paymentsAmount, numberManual } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col mt-4'>
            <h5 className='text-muted'>Calculate difference between CP and CNP fees</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <form className='inputs-form' onSubmit={this.handleSubmit.bind(this)}>
              <div className='form-group'>
                <label htmlFor='paymentsAmount'>
                  Sum of all payments (before fees)
                </label>
                <input id='paymentsAmount' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='paymentsAmount' value={paymentsAmount} />
              </div>
              <div className='form-group narrow'>
                <label htmlFor='numberManual'>
                  Number of manual payments
                </label>
                <input id='numberManual' type='number' className='form-control narrow' onChange={this.handleChange.bind(this)} name='numberManual' value={numberManual} />
              </div>
            </form>
          </div>
        </div>
        { this.renderResults }
      </div>
    )
  }
}

export default FeesDifferenceCalculator
