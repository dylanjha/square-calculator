/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import FeeCalulator from './FeeCalculator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FeeCalulator />, div)
})
