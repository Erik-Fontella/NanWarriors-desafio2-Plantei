import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import ImgLogo from '@Assets/header/header-logo.svg'
const Header = () => {
  return (
    <header>
        <div className="header-container">
            <div className='header-logo'>
                <img src={ImgLogo} alt="Logo do WebSite" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header