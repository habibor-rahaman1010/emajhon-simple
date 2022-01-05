import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuthProvider from '../../Hooks/UseAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logout } = useAuthProvider();
    const UserLogOut = () => {
        logout();
    }

    return (
        <div>
            <div className='logo'><img src={logo} alt="logo" /></div>
            <nav className='nav'>
                <nav className='p-2'>
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

                <nav>
                    {
                        user.photoURL ? <div className='profile'><span><img src={user.photoURL} alt="Avater" /></span> &nbsp; &nbsp;
                            <button onClick={UserLogOut} className='btn btn-danger me-5'>Logout</button> </div> :
                            [
                                <NavLink
                                    to="/login"
                                    style={isActive => ({
                                        color: isActive ? "cyan" : "white"
                                    })}
                                >
                                    Login
                                </NavLink>,

                                <NavLink
                                    to="/registration"
                                    style={isActive => ({
                                        color: isActive ? "cyan" : "white"
                                    })}
                                >
                                    Registration
                                </NavLink>
                            ]
                    }

                </nav>

            </nav>
        </div>
    );
};

export default Header;