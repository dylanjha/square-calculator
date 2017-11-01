/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import IntroNotice from './IntroNotice'

describe('render', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IntroNotice />, div)
  })
})
