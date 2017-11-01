/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import Results from './Results'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Results country={'US'} />, div)
  })
})
