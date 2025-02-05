import { useContext, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../../Component/Navber';

const Register = () => {
    const { crateNewUser, setUser, UpdateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState({})
    const [ErrorPass, setErrorPass] = useState({})
    const [show, setShow] = useState(false)
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const photoUrl = form.get("photo");
        const email = form.get("email");
        const Password = form.get("password");

        let hasError = false;

        // Name Validation
        if (name.length < 5) {
            setError({ ...error, name: "Name must be at least 5 characters long" });
            hasError = true;
        } else {
            setError({ ...error, name: "" });
        }

        // Password Validation
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        
        if (Password.length < 6) {
          setErrorPass({
            ...ErrorPass,
            password: "Password must be at least 6 characters long",
          });
          hasError = true;
        } else if (!specialCharRegex.test(Password)) {
          setErrorPass({
            ...ErrorPass,
            password: "Password must include at least one special character",
          });
          hasError = true;
        } else if (!uppercaseRegex.test(Password)) {
          setErrorPass({
            ...ErrorPass,
            password: "Password must include at least one uppercase letter",
          });
          hasError = true;
        } else if (!lowercaseRegex.test(Password)) {
          setErrorPass({
            ...ErrorPass,
            password: "Password must include at least one lowercase letter",
          });
          hasError = true;
        } else {
          setErrorPass({ ...ErrorPass, password: "" });
        }
        
        if (hasError) return;
        

        // API Call
        crateNewUser(email, Password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);

                UpdateUserProfile({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        Swal.fire({
                            title: "Registration Successful",
                            text: "You have successfully registered!",
                            icon: "success",
                            confirmButtonText: "OK",
                        }).then(() => {
                            navigate("/", {
                                state: { successMessage: "Successfully registered!" },
                            });
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire({
                            title: "Profile Update Failed",
                            text: "Something went wrong while updating your profile.",
                            icon: "error",
                            confirmButtonText: "OK",
                        });
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/email-already-in-use") {
                    setError({
                        ...error,
                        email: "This email is already in use. Please try logging in.",
                    });
                    Swal.fire({
                        title: "Email Already in Use",
                        text: "This email is already registered. Please log in instead.",
                        icon: "warning",
                        confirmButtonText: "OK",
                    });
                } else {
                    console.error(errorMessage);
                    Swal.fire({
                        title: "Registration Failed",
                        text: "An error occurred during registration. Please try again.",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            });
    };


    return (
        <div>
            <div className='w-11/12 mx-auto sticky top-0 z-50 bg-base-200 bg-opacity-90'>
                <Navbar></Navbar>
            </div>
            <div className='flex justify-center '>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                    <h2 className='text-center text-2xl font-semibold mt-5 mb-6'>Register a new Account</h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        {
                            error.name && (
                                <label className="label">
                                    <span className="label-text text-red-400">{error.name}</span>
                                </label>
                            )
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="PhotoUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            {
                                error.email && (
                                    <label className="label">
                                        <span className="label-text text-red-400">{error.email}</span>
                                    </label>
                                )
                            }
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            {
                                ErrorPass.password && (
                                    <label className="label">
                                        <span className="label-text text-red-400">{ErrorPass.password}</span>
                                    </label>
                                )
                            }
                            <div onClick={() => setShow(!show)} className='btn btn-sm w-10 absolute right-4 top-11 '>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Register</button>
                        </div>
                    </form>
                    <p className='text-center'>Already Have An Account ? <NavLink to="/login" className='text-blue-700 font-semibold'>Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;