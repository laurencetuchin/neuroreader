import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <div className='py-4'>

            <NavLink to="/" >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="how">How to use</NavLink>
                </div>
                <h1 className='mb-4 font-extrabold text-gray-800 md:text-5xl lg-text-6xl'>Neuro Reader</h1>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}
