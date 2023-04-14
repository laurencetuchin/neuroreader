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
import 'tailwindcss/tailwind.css';



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
              <div className="bg-primary text-secondary p-4 rounded-lg shadow-lg">
  This is a styled div using Tailwind CSS classes
</div>

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
