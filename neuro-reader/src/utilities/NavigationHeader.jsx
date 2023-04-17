import { Link, Routes, Route, NavLink } from 'react-router-dom'
import About from './About'
import NeuroReaderBranding from './NeuroReaderBranding'


export default function NavigationHeader() {
    return (
        <nav>
            <ul>
                <li>
                     <NavLink exact to="/" >Home</NavLink>
                </li>                
                <li>
                    <NavLink exact to="about">About</NavLink>
                </li>
            </ul>
        <div>
                <NeuroReaderBranding />
        </div>
        </nav>
    )
}