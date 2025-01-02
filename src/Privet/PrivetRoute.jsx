import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContex } from '../Provider/AuthProvider';
const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(authContex)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;