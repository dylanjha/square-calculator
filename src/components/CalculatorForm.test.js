/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import CalculatorForm from './CalculatorForm'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CalculatorForm country='US' />, div)
  })
})
