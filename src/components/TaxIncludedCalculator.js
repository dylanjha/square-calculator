import React, { Component } from 'react'
import { roundTwo } from '../services/mathUtils'

const defaultState = {
  itemPrice: '',
  taxPercentage: '',
  taxIncluded: true
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
    if (target.type === 'checkbox') value = target.checked
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

  get resultsTaxIncluded () {
    const { itemPrice, taxPercentage } = this.state
    const amtBeforeTax = itemPrice / (1 + (taxPercentage / 100))
    const tax = amtBeforeTax * (taxPercentage / 100)
    return {
      beforeTax: amtBeforeTax,
      beforeTaxFormula: `${itemPrice} / (1 + ${taxPercentage / 100})`,
      tax,
      afterTax: itemPrice
    }
  }

  get resultsTaxNotIncluded () {
    const { itemPrice, taxPercentage } = this.state
    const tax = (itemPrice * (taxPercentage / 100))
    return {
      beforeTax: itemPrice,
      tax,
      taxFormula: `${itemPrice} * (${taxPercentage} / 100)`,
      afterTax: (itemPrice + tax)
    }
  }

  get renderResults () {
    const { itemPrice, taxPercentage, taxIncluded } = this.state
    if (!(itemPrice && taxPercentage)) return null
    const results = taxIncluded ? this.resultsTaxIncluded : this.resultsTaxNotIncluded
    const { beforeTax, beforeTaxFormula, tax, taxFormula, afterTax } = results
    return (
      <div className='row results clearfix'>
        <div className='col'>
          <div className='result-line'>
            <div className='result-label'>
              Item amount (before tax)
            </div>
            <div className='result-number'>
              ${roundTwo(beforeTax)} <span className='result-formula'>{beforeTaxFormula}</span>
            </div>
          </div>
          <div className='result-line'>
            <div className='result-label'>
              Tax
            </div>
            <div className='result-number'>
              ${roundTwo(tax)} <span className='result-formula'>{taxFormula}</span>
            </div>
          </div>
          <div className='result-line'>
            <div className='result-label'>
              Total amount (after tax)
            </div>
            <div className='result-number'>
              ${roundTwo(afterTax)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { itemPrice, taxPercentage, taxIncluded } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col mt-4'>
            <h5 className='text-muted'>See how tax included in calculated</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <form className='inputs-form' onSubmit={this.handleSubmit.bind(this)}>
              <div className='form-group'>
                <label htmlFor='itemPrice'>
                  Item Price
                </label>
                <input id='itemPrice' type='number' className='form-control narrow' onChange={this.handleChange.bind(this)} name='itemPrice' value={itemPrice} />
              </div>
              <div className='form-group narrow'>
                <label htmlFor='itemPrice'>
                  Tax Percentage (ex. for 7.5% enter 7.5)
                </label>
                <input id='taxPercentage' type='number' className='form-control narrow' onChange={this.handleChange.bind(this)} name='taxPercentage' value={taxPercentage} />
              </div>
              <div className='form-group narrow'>
                <label htmlFor='taxIncluded'>
                  Tax included in item price?
                </label>
                <input id='taxIncluded' type='checkbox' className='form-control narrow' onChange={this.handleChange.bind(this)} name='taxIncluded' checked={taxIncluded} />
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
