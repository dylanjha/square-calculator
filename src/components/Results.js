import React from 'react'
import PropTypes from 'prop-types'
import { PaymentMethod } from '../services/PaymentMethod'

function Results ({ amount, country, paymentMethod }) {
  let totals = {fee: 0, netAmount: 0}
  if (paymentMethod && amount) {
    totals = paymentMethod.getTotal(amount)
  }
  return (
    <div className='results'>
      <div> { country } (country) </div>
      <div>
        <span>{totals.fee} </span><span className='fee'>fee</span>
      </div>
      <div>
        <span>{totals.netAmount} </span><span className='net-amount'>amount after fee</span>
      </div>
    </div>
  )
}

Results.propTypes = {
  amount: PropTypes.number,
  country: PropTypes.oneOf(['US', 'CA']).isRequired,
  paymentMethod: PropTypes.instanceOf(PaymentMethod)
}

export default Results
