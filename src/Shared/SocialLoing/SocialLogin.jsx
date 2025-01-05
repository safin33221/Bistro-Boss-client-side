import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authContex } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosOpen from '../../Hooks/useAxiosOpen';

const SocialLogin = () => {
    const { signUpGoogle } = useContext(authContex)
    const axiosOpen = useAxiosOpen()
    const navigate = useNavigate()
    const loginGoogle = () => {
        signUpGoogle()
            .then((res) => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email
                }
                console.log(res.data);
                axiosOpen.post('/users', userInfo)
                    .then((res) => {
                        console.log(res.data);
                        navigate('/')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })


            })
    }
    return (
        <div className='p-4 '>
            <hr />
            <button onClick={loginGoogle} className="btn my-4">
                <FaGoogle />Google
            </button>
        </div>
    );
};

export default SocialLogin;