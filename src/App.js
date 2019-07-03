import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FeeCalculator from './components/FeeCalculator'
import DecimalQuantities from './components/DecimalQuantities'
import FeesDifferenceCalculator from './components/FeesDifferenceCalculator'
import ReactGA from 'react-ga'
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'

console.info('REACT_APP_GA_ID', process.env.REACT_APP_GA_ID)
if (process.env.REACT_APP_GA_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

function App () {
  return (
    <Router>
      <div>
        <Header />
        <div className='routes-container'>
          <Route path='/fees' component={FeeCalculator} />
          <Route path='/decimals' component={DecimalQuantities} />
          <Route path='/fees-difference' component={FeesDifferenceCalculator} />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

(function fillDate () {
  const el = document.getElementById('year-copy')
  if (el) {
    let year
    try {
      year = (new Date()).getFullYear()
    } catch (e) {
      console && console.error(e)
    }
    el.innerHTML = year
  }
})()

export default App
