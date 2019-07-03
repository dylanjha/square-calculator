import React, { Component } from 'react'
import { roundTwo } from '../services/mathUtils'

class DecimalQuantities extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pricePerUnit: '',
      numUnits: '',
      modifiers: []
    }
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

  get renderResults () {
    const { pricePerUnit, numUnits, modifiers } = this.state
    if (!(pricePerUnit && numUnits)) return null
    const baseTotal = (pricePerUnit) * numUnits
    let total = baseTotal
    return (
      <div className='row results clearfix'>
        <div className='col'>
          <div className='result-line'>
            <div className='result-label'>
              {`$${roundTwo(pricePerUnit)} x ${numUnits}`}
            </div>
            <div className='result-number'>
              {`$${baseTotal}`}
            </div>
          </div>
          {
            modifiers.map((modifier, idx) => {
              if (!modifier) return null
              const modTotal = modifier * numUnits
              total = total + modTotal
              return (
                <div className='result-line' key={idx}>
                  <div className='result-label'>
                    [Modifier {idx + 1}] ${roundTwo(modifier)} x {numUnits}
                  </div>
                  <div className='result-number'>
                    ${modTotal}
                  </div>
                </div>
              )
            })
          }
          <div className='result-line strong'>
            <div className='result-label'>
              Total
            </div>
            <div className='result-number'>
              ${roundTwo(total)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { pricePerUnit, numUnits, modifiers } = this.state
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
                <input id='pricePerUnit' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='pricePerUnit' value={pricePerUnit} />
              </div>
              <div className='form-group'>
                <label htmlFor='pricePerUnit'>
                  Number of units
                </label>
                <input id='numUnits' type='number' className='form-control' onChange={this.handleChange.bind(this)} name='numUnits' value={numUnits} />
              </div>
              {
                modifiers.map((modifier, idx) => {
                  const name = `modifier_${idx}`
                  return (
                    <div className='form-group' key={idx}>
                      <label htmlFor='modifierPrice'>
                        Modifier {idx + 1} price:
                      </label>
                      <input
                        id={name}
                        type='number'
                        className='form-control narrow'
                        onChange={(e) => {
                          const { modifiers } = this.state
                          modifiers[idx] = +e.target.value
                          this.setState({ modifiers })
                        }}
                        name='modifierPrice'
                        value={modifiers[idx]}
                      />
                    </div>
                  )
                })
              }
              <div className='form-name'>
                <button
                  className='btn btn-primary'
                  onClick={(e) => {
                    e.preventDefault()
                    const { modifiers } = this.state
                    modifiers.push(0)
                    this.setState({ modifiers })
                  }}
                >Add modifier</button>
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
