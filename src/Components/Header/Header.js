import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'><img src={logo} alt="logo" /></div>
            <nav className='nav'>
                <a href="/Home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/Inventory">Manage Inventory here</a>
                <a href="/review">Order review</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;