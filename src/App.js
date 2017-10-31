import React, { Component } from 'react'
// import { PaymentMethod } from './services/PaymentMethod'
import MethodDetails from './components/MethodDetails'
import CalculatorForm from './components/CalculatorForm'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='container' style={{marginTop: '40px'}}>
        <div className='row'>
          <div className='col'>
            <h2>Fee Calculator</h2>
            <CalculatorForm />
            <MethodDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default App
