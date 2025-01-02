import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { authContex } from '../../Provider/AuthProvider';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { createUserWithEamil,updateUserProfile } = useContext(authContex)
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data);
        createUserWithEamil(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user 
                console.log(loggedUser); 
                updateUserProfile(data.name,data.photo)
                navigate('/')

            })

    }
    console.log(watch, "example");
    return (
        <div className="hero bg-base-200 min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register  now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600'>this fild is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name="photo" {...register("photo")} type="photo" placeholder="Photo" className="input input-bordered"  />
                            {errors.photo && <p className='text-red-600'>photo fild is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })} type="text" placeholder="password" className="input input-bordered" />
                            {errors?.password?.type && <p className='text-red-600'>Password is required</p>}
                            {errors?.password?.type === 'minLength' && <p className='text-red-600'>Password has must 6 char </p>}
                            {errors?.password?.type === 'minLength' && <p className='text-red-600'>Password has must 12 char </p>}
                            {errors?.password?.type === 'pattern' && <p className='text-red-600'>Password must have one lower and uppercase letter and must a spacial char  </p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p><Link to='/login'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;