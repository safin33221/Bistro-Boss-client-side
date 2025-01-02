import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef()
    const [disabled,setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
    }
    const handleValitedCaptcha = e => {
        const value = captchaRef.current.value
        console.log(value);
        if(validateCaptcha(value) ){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen w-10/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />

                            </label>
                            <input ref={captchaRef} name="captcha" type="text" placeholder="captcha" className="input input-bordered" required />
                            <button onClick={handleValitedCaptcha} className="btn btn-outline btn-xm">valideted</button>

                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p><Link to='/register'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;