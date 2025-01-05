import React from 'react';
import { FaAd, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaCableCar } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-3'>
                    <li>
                        <NavLink to="/dashboard/home"> <FaHome/>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCableCar/>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart/> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd/> Add A Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking"> <FaList/> My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad"> <FaSearch/>Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex flex-1'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashBoard;