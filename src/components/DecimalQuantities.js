import React, { Component } from 'react'

const defaultState = {
  pricePerUnit: '',
  numUnits: ''
}

class DecimalQuantities extends Component {
  constructor (props) {
    super(props)
    this.state = defaultState
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  handleChange (event) {
    const target = event.target
    let value = target.type === 'number' ? Number(target.value) : target.value
    const set = {}
    if (!['pricePerUnit', 'numUnits', 'modifierPrice'].includes(target.name)) {
      throw new Error(`Unexpected onChange target name: ${target.name}`)
    }
    set[target.name] = value
    this.setState(set)
  }

  get renderResults () {
    const { pricePerUnit, numUnits, modifierPrice = 0 } = this.state
    if (!(pricePerUnit && numUnits)) return null
    const total = (pricePerUnit + modifierPrice) * numUnits
    return (
      <div className='row results clearfix'>
        <div className='col'>
          {
            modifierPrice
              ? `(${pricePerUnit} + ${modifierPrice}) x ${numUnits} = ${total}`
              : `${pricePerUnit} x ${numUnits} = ${total}`
          }
        </div>
      </div>
    )
  }

  render () {
    const { pricePerUnit, numUnits, modifierPrice } = this.state
    return (
      <div className='container'>
        <div className='row'>
          <div className='col mt-4'>
            <h5 className='text-muted'>Calculate Square Decimal Quantities</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <form className='inputs-form' onSubmit={this.handleSubmit.bind(this)}>
              <div className='form-group'>
                <label htmlFor='pricePerUnit'>
                  Price per unit
                </label>
                <input id='pricePerUnit' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='pricePerUnit' defaultValue={pricePerUnit} />
              </div>
              <div className='form-group'>
                <label htmlFor='pricePerUnit'>
                  Number of units
                </label>
                <input id='numUnits' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='numUnits' defaultValue={numUnits} />
              </div>
              <div className='form-group'>
                <label htmlFor='modifierPrice'>
                  Modifier price
                </label>
                <input id='modifierPrice' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='modifierPrice' defaultValue={modifierPrice} />
              </div>
            </form>
          </div>
        </div>
        { this.renderResults }
      </div>
    )
  }
}

export default DecimalQuantities
