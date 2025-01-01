import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/Contact">Contact</NavLink></li>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/Dashboard">Dashboard</NavLink></li>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/menu">Our Menu</NavLink></li>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/shop/salad">Our Shop</NavLink></li>
        <li className='mx-3 text-yellow-600 font-bold'><NavLink to="/login">Login</NavLink></li>
        
        
    </>
    return (
        <div className="navbar fixed z-50 bg-black bg-blend-overlay opacity-70  backdrop-blur-sm text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div>
                    <h1 className=" text-2xl font-extrabold text-white uppercase mx-5 ">Bistro Boss <br />
                        <span className='uppercase text-sm'>reasturant</span>
                    </h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;