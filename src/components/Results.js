import React from 'react'
import PropTypes from 'prop-types'
import { PaymentMethod } from '../services/PaymentMethod'

function Results ({ amount, country, paymentMethod }) {
  let totals = {fee: 0, netAmount: 0}
  if (paymentMethod && amount) {
    totals = paymentMethod.getTotal(amount)
  }

  // const leftW = '100px'

  return (
    <div className='results clearfix'>
      <div className='results-summary'>
        <div> { country } (country) </div>
        <div>
          <span>{totals.fee} </span><span className='fee'>fee</span>
        </div>
        <div>
          <span>{totals.netAmount} </span><span className='net-amount'>amount after fee</span>
        </div>
      </div>
      <div className='results-math'>
        <div className='math-sale'>
          <span className='math-left-col'>
            sale
          </span>
          <span className='math-right-col'>
            $10.00
          </span>
        </div>

        <div className='math-fee'>
          <div className='math-fee-percent'>
            <span className='math-left-col math-fee-percent-label'>
              10.00 * 0.025 =
            </span>
            <span className='math-right-col math-fee-percent-amount'>
              - 0.25
            </span>
          </div>
          <div className='math-after-percent-fee'>
            <span className='math-left-col'>
            </span>
            <span className='math-right-col'>
              $9.75
            </span>
          </div>
          <div className='math-fee-flat'>
            <span className='math-left-col'>
              $0.10
            </span>
            <span className='math-right-col math-fee-flat-amount'>
              - 0.10
            </span>
          </div>
        </div>

        <div className='math-after-fee'>
          <span className='math-left-col'>
          </span>
          <span className='math-right-col'>
            $9.65
          </span>
        </div>
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
