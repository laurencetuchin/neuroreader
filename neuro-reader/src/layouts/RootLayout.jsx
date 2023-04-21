import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav className=''>
                <div className='mb-4 flex-items-center '>

            <NavLink to="/" >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="how">How to use</NavLink>
                </div>
            </nav>

        </header>

        <main className='md:container md:mx-auto '>
        <h1 className='mb-4 font-bold text-gray-800 text-3xl md:text-5xl lg-text-6xl'>Neuro Reader</h1>
            <Outlet />
        </main>
    </div>
  )
}
