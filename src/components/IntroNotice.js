import React from 'react'

function IntroNotice () {
  return (
    <div className='alert alert-info' style={{marginTop: '30px'}}>
      <strong>Articles from Square support center:</strong>
      {' '}
      <a href='https://squareup.com/help/us/en/article/5068-what-are-square-s-fees' target='_blank' rel='noopener noreferrer'>
        US fees
      </a>
      {' '}
      <a href='https://squareup.com/help/ca/en/article/5068-what-are-square-s-fees' target='_blank' rel='noopener noreferrer'>
        Canada fees
      </a>
    </div>
  )
}

export default IntroNotice
