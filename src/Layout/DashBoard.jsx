import React from 'react';
import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaUtensilSpoon } from 'react-icons/fa';
import { FaCableCar, FaUser } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-3'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/home"> <FaHome />Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add-item"> <FaUtensils />Add Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-item"> <FaList />Manage Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manage-booking"> <FaBook />Manage booking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/all-users"> <FaUsers />All User</NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/home"> <FaHome />User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"> <FaCableCar />Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"> <FaShoppingCart /> My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review"> <FaAd /> Add A Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking"> <FaList /> My Booking</NavLink>
                                </li>

                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/salad"> <FaSearch />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop/contact"> <FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;