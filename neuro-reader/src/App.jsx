import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationHeader from './utilities/NavigationHeader'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// pages to import
import About from './utilities/About'
import Home from './utilities/Home'
import NeuroReaderBranding from './utilities/NeuroReaderBranding'

function App() {

  return (
        <BrowserRouter>
          {/* <NavigationHeader /> */}
          <header>
            <nav>
              {/* <NeuroReaderBranding /> */}
              <NavigationHeader />
              {/* <NavLink to="/">Home</NavLink> */}
              {/* <NavLink to="about">About</NavLink> */}
            </nav>
          </header>

          <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
       
      {/* Add transform text component */}

          </main>
        </BrowserRouter>
  )
}

export default App
