import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components/Navbar.css"
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
          <header className='header'>
            <h2 className='logoContainer'><Link to="/" className='logo'>VikasPal</Link></h2>
            <div className="searchContainer">
              <div className="searchInputContainer">
                <FaSearch className='search-icon' />
              <input type="text" placeholder='Search' className='search-input' name="" id="" />
              </div>
            </div>
            <nav className='nav-icon'>
                {/* <a href="/" className='heart-icon'>Home</a> */}
                <Link to="/" className='heart-icon'>Home</Link>
                {/* <a href="/request" className='cart-icon'>Request</a> */}
                <Link to="/request" className='cart-icon'>Requests</Link>
                {/* <a href="/about" className='user-icon'>About Us</a> */}
                <Link to="/about" className='user-icon'>About</Link>
            </nav>
            <GiHamburgerMenu className='hamburger-icon' />

          </header>
    </>
  )
}

export default Navbar;
