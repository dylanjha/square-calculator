import React from 'react'
import { PaymentMethod } from '../services/PaymentMethod'

function MethodDetails ({ country, method }) {
  return (
    <table className='table table-striped method-details-table'>
      <thead>
        <tr>
          <th>Payment Method for Country: {country}</th>
          <th>Description</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {
          PaymentMethod.allForCountry(country).map((paymentMethod) => {
            return (
              <tr key={paymentMethod.id} className={paymentMethod.id === method ? 'table-success' : ''}>
                <td>{paymentMethod.name}</td>
                <td>{paymentMethod.description}</td>
                <td>{paymentMethod.feeToHuman()}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default MethodDetails
