import React from 'react'

function IntroNotice () {
  return (
    <div className='alert alert-info' style={{marginTop: '30px'}}>
      <h6>Articles from Square support center:</h6>
      <ul>
        <li>
          <a href='https://squareup.com/help/us/en/article/5068-what-are-square-s-fees' target='_blank'>
            US fees
          </a>
        </li>
        <li>
          <a href='https://squareup.com/help/ca/en/article/5068-what-are-square-s-fees' target='_blank'>
            Canada fees
          </a>
        </li>
      </ul>
    </div>
  )
}

export default IntroNotice
