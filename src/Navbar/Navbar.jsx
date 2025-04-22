import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='container'>
                <div className="left-side-navbar"><img src="src\assets\Dashboard-logo.svg" alt="image" /></div>
                <div className="center-side-navabr">
                    <ul className='center-side-navbar-parent-element'>
                        <li className="center-side-navbar-element"><a href="">Vehicles</a></li>
                        <li className="center-side-navbar-element"><a href="">Energy</a></li>
                        <li className="center-side-navbar-element"><a href="">Charging</a></li>
                        <li className="center-side-navbar-element"><a href="">Discover</a></li>
                        <li className="center-side-navbar-element"><a href="">Shop</a></li>
                    </ul>
                </div>
                <div className="right-side-navbar">
                    <img src="src\assets\questionmark-logo.svg" alt="img" className="right-logos" />
                    <img src="src\assets\world-logo.svg" alt="" className="right-logos" />
                    <img src="src\assets\profile-logo.svg" alt="" className="right-logos" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
