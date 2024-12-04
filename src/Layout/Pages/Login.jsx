
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
    const { setUser, Login, continueToGoogle, } = useContext(AuthContext)
    const [show, setShow] = useState(false)

    const hanldeSubmiteLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const [error, setError] = useState({})
        const Password = form.get('password');
        console.log(email, Password)

        Login(email, Password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/", { state: { successMessage: "Successfully logged in!" } });
                console.log(user);
            })
            .catch((error) => {
                let errorMessage = "Login failed. Please try again.";
                if (error.code === "auth/user-not-found") {
                    errorMessage = "No user found with this email. Please register first.";
                } else if (error.code === "auth/wrong-password") {
                    errorMessage = "Incorrect password. Please try again.";
                } else if (error.code === "auth/too-many-requests") {
                    errorMessage = "Too many login attempts. Please try again later.";
                }
                // Display the error message
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 3000, // Closes after 3 seconds
                });

                setError({ ...error, Login: errorMessage });
            });
    }


    return (
        <div className=' flex  justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className='text-center text-2xl font-semibold mt-5 mb-6'>Login Your Account</h2>
                <hr />
                <form onSubmit={hanldeSubmiteLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                        {/* {
                            error.Login && (
                                <label className="label text-sm text-red-600">
                                    {error.Login}
                                </label>
                            )
                        } */}
                        <div onClick={() => setShow(!show)} className='btn btn-sm w-10 absolute right-4 top-11 '>
                            {
                                show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </div>
                        <label className="label">
                            <span className="label-text-alt link link-hover">
                                Forgot password?
                            </span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Login</button>
                    </div>
                </form>
                <button onClick={continueToGoogle} className="btn">
                    <FaGoogle></FaGoogle> Login with Google
                </button>
                <p className='text-center'> Don t Have An Account ? <NavLink to="/register" className='text-blue-700 font-semibold'>Register</NavLink></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;