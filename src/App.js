import React from 'react'
import FeeCalculator from './components/FeeCalculator'
import ReactGA from 'react-ga'
import './App.css'

console.info('REACT_APP_GA_ID', process.env.REACT_APP_GA_ID)
if (process.env.REACT_APP_GA_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

function App () {
  return <FeeCalculator />
}

export default App
