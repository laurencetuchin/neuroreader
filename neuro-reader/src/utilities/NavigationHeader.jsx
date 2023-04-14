import { Link, Routes, Route, NavLink } from 'react-router-dom'
import About from './About'
import NeuroReaderBranding from './NeuroReaderBranding'


export default function NavigationHeader() {
    return (
        <div>
                {/* <Routes>
                    <Route path='/about' element={<About />}/>
                </Routes> */}
                {/* <Link to={<About />} /> */}
                <NeuroReaderBranding />
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                
        </div>
    )
}