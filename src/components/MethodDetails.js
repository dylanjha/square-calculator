import React from 'react'
import { PaymentMethod } from '../services/PaymentMethod'

function MethodDetails () {
  return (
    <table className='table table-striped table-info method-details-table'>
      <thead>
        <tr>
          <th>Payment Method</th>
          <th>Description</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {
          PaymentMethod.all().map((paymentMethod) => {
            return (
              <tr key={paymentMethod.id}>
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
