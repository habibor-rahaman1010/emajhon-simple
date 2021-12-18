import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='logo'><img src={logo} alt="logo" /></div>
            <nav className='nav'>
                <NavLink
                    to="/"
                    style={isActive => ({
                        color: isActive ? "cyan" : "white"
                    })}
                >
                    Home
                </NavLink>


                <NavLink
                    to="/shop"
                    style={isActive => ({
                        color: isActive ? "cyan" : "white"
                    })}
                >
                    Sope
                </NavLink>

                <NavLink
                    to="/inventory"
                    style={isActive => ({
                        color: isActive ? "cyan" : "white"
                    })}
                >
                    Manage Inventory
                </NavLink>

                <NavLink
                    to="/review"
                    style={isActive => ({
                        color: isActive ? "cyan" : "white"
                    })}
                >
                    Order Review
                </NavLink>

                <NavLink
                    to="/about"
                    style={isActive => ({
                        color: isActive ? "cyan" : "white"
                    })}
                >
                    About
                </NavLink>

            </nav>
        </div>
    );
};

export default Header;