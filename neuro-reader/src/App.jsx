import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationHeader from './utilities/NavigationHeader'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Neuro Reader</h1>
      <div className="card">
        <NavigationHeader />
        <p>
          Let's upgrade your learning
        </p>
      </div>
      {/* Add transform text section */}

    </div>
  )
}

export default App
