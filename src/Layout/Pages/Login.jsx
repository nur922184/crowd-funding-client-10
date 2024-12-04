import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const { setUser, Login, continueToGoogle } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(""); // এরর স্টেট যোগ করা হয়েছে
    const navigate = useNavigate();

    // Google Login Handler
    const handdlecontinueToGoogle = () => {
        continueToGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/", { replace: true });
                toast.success("Successfully logged in with Google!", {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                toast.error("Google Login failed. Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                console.error("Google Login Error:", error);
            });
    };

    // Email/Password Login Handler
    const hanldeSubmiteLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        Login(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/", { state: { successMessage: "Successfully logged in!" }, replace: true });
                toast.success("Successfully logged in!", {
                    position: "top-center",
                    autoClose: 3000,
                });
                setError(""); // এরর ক্লিয়ার করা
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

                setError(errorMessage); // এরর সেট করা
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="card bg-white w-full max-w-lg shadow-2xl p-10">
                <h2 className="text-center text-2xl font-semibold mt-5 mb-6">Login Your Account</h2>
                <hr />
                <form onSubmit={hanldeSubmiteLogin} className="card-body">
                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <div
                            onClick={() => setShow(!show)}
                            className="btn btn-sm w-10 absolute right-4 top-11"
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="text-sm text-red-600 mt-2">{error}</p>
                    )}

                    <div className="form-control mt-6">
                        <button className="btn btn-outline">Login</button>
                    </div>
                </form>

                {/* Google Login */}
                <button
                    onClick={handdlecontinueToGoogle}
                    className="btn mt-4 flex items-center justify-center gap-2"
                >
                    <FaGoogle /> Login with Google
                </button>

                <p className="text-center mt-4">
                    Don’t Have An Account?{" "}
                    <NavLink to="/register" className="text-blue-700 font-semibold">
                        Register
                    </NavLink>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
