import React from 'react'
import { Link } from "react-router-dom";
import { FaSearch,FaUser,FaListUl } from "react-icons/fa";

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
                        <FaSearch />
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
            {/* users profile  */}
            <div className="Icons">
                <span>
                    <FaUser />
                </span>
                <span>
                    <FaListUl />
                </span>
            </div>
        </div>
    );
}

export default Navbar
