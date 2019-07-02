import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className='container'>
      <div name='row'>
        <div name='col' className='top-header'>
          <h2>
            Square Calculator
          </h2>
        </div>
      </div>
      <div name='row' className='pt-4'>
        <NavLink to='/fees' className='navlink pr-3' activeClassName='active'>Fee Calculator</NavLink>
        <NavLink to='/decimals' className='navlink' activeClassName='active'>Decimal Quantities</NavLink>
      </div>
    </div>
  )
}
