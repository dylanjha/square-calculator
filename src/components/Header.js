import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className='container'>
      <div name='row'>
        <div name='col' className='top-header'>
          <h2>
            <a href='/' className='header-link'>Square Calculator</a>
          </h2>
        </div>
      </div>
      <div name='row' className='pt-4'>
        <div className='btn-group' role='group'>
          <NavLink to='/fees' className='btn btn-secondary' activeClassName='active'>Fee Calculator</NavLink>
          <NavLink to='/decimals' className='btn btn-secondary' activeClassName='active'>Decimal Quantities</NavLink>
          <NavLink to='/fees-difference' className='btn btn-secondary' activeClassName='active'>Fees CP/CNP Difference</NavLink>
          <NavLink to='/tax-included-calculator' className='btn btn-secondary' activeClassName='active'>Tax Included Calculator</NavLink>
        </div>
      </div>
    </div>
  )
}
