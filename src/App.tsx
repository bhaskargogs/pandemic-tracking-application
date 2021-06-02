import React from 'react'
import './App.scss'
import DisplayIncidence from './components/DisplayIncidence/DisplayIncidence'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayIncidence />
        <h2>Getting started with React testing library</h2>
      </header>
    </div>
  )
}

export default App
