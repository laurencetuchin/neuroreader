import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationHeader from './utilities/NavigationHeader'
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// pages to import
import About from './utilities/About'
import Home from './utilities/Home'
import NeuroReaderBranding from './utilities/NeuroReaderBranding'
import 'tailwindcss/tailwind.css';
import NeuroReader from './features/NeuroReader'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink
} from "react-router-dom";
// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
  </Route>
  )
);

function App() {

  return ( 
    <>
    <div className='bg-fuchsia-200'>

          {/* <NavigationHeader /> */}
          <header>
            <nav>
              {/* <NeuroReaderBranding /> */}
              {/* <NavigationHeader /> */}
              {/* <NavLink to="/">Home</NavLink> */}
              {/* <NavLink to="about">About</NavLink> */}
              {/* <div className="bg-primary text-secondary p-4 rounded-lg shadow-lg">
  This is a styled div using Tailwind CSS classes
</div> */}

            </nav>
          </header>

          <RouterProvider router={router} />

       
      {/* Add transform text component */}
          
</div>
</>

  )
}

export default App
