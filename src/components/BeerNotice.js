import React from 'react'

function DonateNotice () {
  return (
    <div className='alert alert-success' style={{marginTop: '30px'}}>
      <span role="img" aria-label="beer glass" style={{fontSize: '20px'}}>🍺 </span>
      <span>If you find this useful consider</span>
      {' '}
      <a href='https://cash.me/$dylanj' target='_blank' rel='noopener noreferrer'>
        <strong>buying me a beer</strong>
      </a>
      {'.'}
    </div>
  )
}

export default DonateNotice
