import React from 'react'
import PropTypes from 'prop-types'
import { PaymentMethod } from '../services/PaymentMethod'

function Results ({ amount, country, paymentMethod }) {
  let calculations

  if (paymentMethod && amount) {
    calculations = paymentMethod.getCalculations(amount)
  }

  return (
    <div className='row results clearfix'>
      <div className='col-12 col-md-3 results-summary'>
        <div> { country } (country) </div>
        <div className='fee-line'>
          <span>{calculations ? calculations.totalFee : '0'} </span><span className='fee'>fee</span>
        </div>
        <div>
          <span>{calculations ? calculations.netAmount : '0'} </span><span className='net-amount'>net amount</span>
        </div>
      </div>
      { calculations ? <ResultsMath {...calculations} /> : <div / > }
    </div>
  )
}

function ResultsMath ({
  saleAmt,
  percentFeeLabel,
  percentFeeAmount,
  amountAfterPercentFee,
  flatFeeLabel,
  flatFeeAmount,
  netAmount,
}) {
  return (
    <div className='col-12 col-md-9 results-math'>
      <table className="table results-math-table">
        <tbody>
          <tr className="math-sale">
            <td></td>
            <td>sale</td>
            <td>{ saleAmt }</td>
          </tr>
          <tr className="math-fee">
            <td>percent fee</td>
            <td>{ percentFeeLabel }</td>
            <td>{ percentFeeAmount }</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>{ amountAfterPercentFee }</td>
          </tr>
          <tr className="math-fee">
            <td>flat fee</td>
            <td>{ flatFeeLabel }</td>
            <td>{ flatFeeAmount }</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>{ netAmount }</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Results.propTypes = {
  amount: PropTypes.number,
  country: PropTypes.oneOf(['US', 'CA']).isRequired,
  paymentMethod: PropTypes.instanceOf(PaymentMethod)
}

export default Results
