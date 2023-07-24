import React from 'react';
import logo from './logo.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <img className='logo' src={logo} alt='none'></img>
            <ul className='nav-list'>
                <li>ADMISSION</li>
                <li>PROGRAMS</li>
                <li>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
            <div className='side-nav'>
                <div className='side-nav-list'>
                    <li>Apply</li>
                    <li>Visit</li>
                    <li>Contact</li>
                </div>
            </div>
            <div class="toggle-menu">&#9776;</div>

        </nav>
    )
}