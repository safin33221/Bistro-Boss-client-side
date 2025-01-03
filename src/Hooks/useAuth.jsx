import React, { useContext } from 'react';
import { authContex } from '../Provider/AuthProvider';

const useAuth = () => {
   const auth = useContext(authContex)
   return auth
};

export default useAuth;