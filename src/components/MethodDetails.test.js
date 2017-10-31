/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import MethodDetails from './MethodDetails'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MethodDetails country='US' />, div)
  })
})
