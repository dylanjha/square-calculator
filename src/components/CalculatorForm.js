import React, { Component } from 'react'
import { PaymentMethod } from '../services/PaymentMethod'

class CalculatorForm extends Component {
  handleChange (event) {
    this.props.onChange(event)
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    const options = PaymentMethod.allForCountry(this.props.country).map((method) => {
      return <option key={method.id} value={method.id}>{method.name}</option>
    })
    return (
      <form id='calculator-form' className='inputs-form' onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <label htmlFor='method' style={{ paddingRight: '10px' }}>
            Country
          </label>
          <span style={{ paddingRight: '10px' }}>
            <input type='radio' name='country' value='US' onChange={this.handleChange.bind(this)} checked={this.props.country === 'US'} /> US
          </span>
          <span style={{ paddingRight: '10px' }}>
            <input type='radio' name='country' value='CA'onChange={this.handleChange.bind(this)} checked={this.props.country === 'CA'} /> CA
          </span>
        </div>
        <div className='form-group'>
          <label htmlFor='method'>
            Method
          </label>
          <select id='method' className='form-control' onChange={this.handleChange.bind(this)} name='method' defaultValue={this.props.method || ''}>
            <option value=''> -- select a payment method -- </option>
            {options}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>
            Sale Amount
          </label>
          <input id='amount' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='amount' defaultValue={this.props.amount} />
        </div>
      </form>
    )
  }
}

export default CalculatorForm
