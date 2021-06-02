import React from 'react'
import './App.scss'
import DisplayIncidence from './components/DisplayIncidence/DisplayIncidence'

const App: React.FC = () => {
  return (
    <div className="container">
      <h3 className="justify-content-center d-flex App">COVID-19 Tracker application</h3>
      <DisplayIncidence />
    </div>
  )
}

export default App
