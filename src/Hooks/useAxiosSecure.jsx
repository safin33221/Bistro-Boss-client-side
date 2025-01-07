import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContex } from '../Provider/AuthProvider';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5050'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { singoutUser } = useContext(authContex)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Token')
        
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    //interceptor 401 and 403 
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error?.response?.status
        
        if (status === 401 || status === 403) {
            await singoutUser()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;