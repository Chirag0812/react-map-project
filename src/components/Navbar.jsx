import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {

    // navbar section 
    return (
        <div className="navbar">

            {/* logo and name  */}
            <div className="logo-name">
                <div className="outer">
                    <img src="https://www.thewasserstoff.com/images/wstf-logo.svg" alt="Logo" />
                
                </div>
                {/* Name of Company  */}
                <p>WASSERSTOFF</p>
            </div>
            
            {/* Search option  */}

            <div className="search">
                <div className="searchBox">
                    {/* search box  */}
                    <input type="search" name="search" id="find" />
                    <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
                {/* unordered list  */}
                <ul className="myNavlist">
                    <li>
                        <Link to="/">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/Overview">Overview</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/Analytics">Analytics</Link>
                    </li>
                </ul>
            </div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Navbar
