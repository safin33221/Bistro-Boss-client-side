import React, { useContext, useEffect, useState } from 'react';
import { FaAd, FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaUtensilSpoon } from 'react-icons/fa';
import { FaCableCar, FaUser } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { authContex } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';

const DashBoard = () => {
    // const [isAdmin] = useAdmin();
    const { user, setIsAdmin, isAdmin, loading,signUpUser,name } = useContext(authContex)
    console.log(name,'safin33221',user);

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5050/users/admin/${user?.email}`, {
                method: "GET",
                headers: {
                    "content-type": "aplication/json",
                    'Authorization': `Bearer ${localStorage.getItem('Token')}`,
                }
            })
                .then(res => res.json())
                .then(data => setIsAdmin(data?.admin))
        }
    }, [user])
    if(loading){
        return <h1>loading .......</h1>
    }

    // const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    //     queryKey: [user?.email, 'isAdmin'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    //         console.log('admin data', res.data);
    //         return res?.data?.admin
    //     }

    // })
    console.log(isAdmin);

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