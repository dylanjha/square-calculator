import React, { Component } from 'react'
import './App.css'

function roundTwo (number) {
  return (Math.round((number * 1000) / 10) / 100).toFixed(2)
}

function displayStringForMethod (methodName) {
  const details = methods[methodName]
  if (!details) throw new Error(`Missing details for methodName ${methodName}`)
  let str = `${methodName} fee: ${roundTwo(details.rate * 100)}%`
  if (details.flat) {
    str += (` + $${roundTwo(details.flat)}`)
  }
  return str
}

const methods = {
  'swipe/chip': {rate: 0.0275, flat: 0},
  manual: {rate: 0.035, flat: 0.15},
  invoice: {rate: 0.029, flat: 0.30},
  'invoice card on file': {rate: 0.035, flat: 0.15}
}

class MethodDetails extends React.Component {
  render () {
    const methodList = []
    for (let p in methods) {
      methodList.push(<li key={p}>{displayStringForMethod(p)}</li>)
    }
    return (
      <div className='alert alert-info'>
        <ul>
          {methodList}
        </ul>
      </div>
    )
  }
}

class CalculatorForm extends React.Component {
  constructor (props) {
    super(props)
    this.methods = Object.keys(methods)
    this.inputs = {method: this.methods[0], amount: 0}
    this.state = {netAmount: 0, fee: 0}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    let value = target.type === 'number' ? Number(target.value) : target.value
    if (target.type === 'number') {
      value = Number(value)
    }

    this.inputs[name] = value

    if (!this.inputs.amount) {
      return this.setState({fee: 0, netAmount: 0})
    }
    let props = methods[this.inputs.method]
    if (!props) throw new Error(`Missing properties for method ${this.inputs.method}`)
    const fee = roundTwo((this.inputs.amount * props.rate) + (props.flat))
    console.log('debug', this.inputs.method, this.inputs.amount, fee)
    const netAmount = roundTwo(this.inputs.amount - fee)

    this.setState({
      fee: fee,
      netAmount: netAmount
    })
    event.preventDefault()
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    let options = []
    for (let p in methods) {
      options.push(<option key={p} value={p}>{p}</option>)
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='method'>
            Method
          </label>
          <select id='method' className='form-control' defaultValue={this.inputs.method} onChange={this.handleChange} name='method'>
            {options}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>
            Sale Amount
          </label>
          <input id='amount' type='number' className='form-control' defaultValue={this.inputs.amount} onChange={this.handleChange} name='amount' />
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

class App extends Component {
  render () {
    return (
      <div style={{padding: '40px'}}>
        <h2>Fee Calculator</h2>
        <CalculatorForm />
        <MethodDetails />
      </div>
    )
  }
}

export default App
