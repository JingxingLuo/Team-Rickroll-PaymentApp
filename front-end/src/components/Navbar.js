import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/RickRoll.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className = "navbar">
            <div className = "leftSide">
                <img src = {Logo} alt="uh" />
            </div>
            <div className = "rightSide">
                <Link to= "/"> Home</Link>
                <Link to= "/about"> About Us</Link>
                <Link to= "/login"> Log In</Link>
                <Link to= "/signup"> Sign Up</Link>
                <Link to= "/transactions"> Transacations</Link>
            </div>
        </div>
    //     <div class="active-links">
    //     <nav id="main-menu" class="nav-menu">
    //       <ul class="main-menu-list">
    //         <li>
    //           <Link to="/" class="Home">
    //             Home
    //             </Link>
    //         </li>
    //         <li>
    //           <Link to="/About" class="About">
    //             About Us
    //             </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    //   <div class="header-buttons">
    //     <div class="button-list">
    //       <button class="login1">
    //         <Link class="Login" to="/Login">
    //           Log In
    //         </Link>
    //       </button>
    //       <button class="signup1">
    //         <Link class="Sign-up" to="/Signup">
    //           Sign Up
    //         </Link>
    //       </button>
    //     </div>
    //   </div>
    )
}

export default Navbar
