import { Link, Routes, Route, NavLink } from 'react-router-dom'
import About from './About'
import NeuroReaderBranding from './NeuroReaderBranding'
import 'tailwindcss/tailwind.css';

export default function NavigationHeader() {
    return (
        <nav className='container flex justify-around py-8 mx-auto bg-white'>
            <div className='space-x-8'>



                
                     <NavLink exact to="/" >Home</NavLink>
                               
                
                    <NavLink exact to="about">About</NavLink>
                
            
            </div>
        <div>
                <NeuroReaderBranding />
        </div>
        </nav>
    )
}