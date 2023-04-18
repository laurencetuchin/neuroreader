import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Neuro Reader</h1>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="about">About</NavLink>

            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}