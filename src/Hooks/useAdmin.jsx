import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { authContex } from "../Provider/AuthProvider";
import axios from "axios";


const useAdmin = () => {
    const { user } = useContext(authContex)

    const axiosSecure = useAxiosSecure()
    // const [isAdmin, setIsAdmin] = useState(null)
    // useEffect(() => {
    //     const res = axios.get(`http://localhost:5050/users/admin/${user?.email}`)
    //     setIsAdmin(res.data)
    // }, [user])

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        
            return res?.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;