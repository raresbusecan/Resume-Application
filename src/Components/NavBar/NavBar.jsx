import './NavBar.css'
import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../image/Logo.png'

function NavBar() {
    return (
        <div>
            <header className='header' >
                <div className='logo'>
                    <Link to="/home" >
                        <img id='logo' src={Logo}></img>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home" >Home</Link>
                        </li>
                        <li>
                            <Link to="/about" >About</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skills</Link>
                        </li>
                        <li>
                            <Link to="/contact" >Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;