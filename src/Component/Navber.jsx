import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UsesPic from '../assets/user-profile-icon-free-vector.png'
import logo from '../assets/download.png'
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext)
    const handleSignOut = () => {
        Logout()
            .then(() => {
                alert('users sign out successfully')
            })
            .catch(error => console.log('ERROR', error.message))
    }
    const Links =
        <>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/campaigns'>All Campaigns</NavLink> </li>
            {
                user && <>
                    <li><NavLink to='/addnewcampaign'>AddCampaign</NavLink> </li>
                    <li><NavLink to='/my-campaigns'>MyCampaigns</NavLink> </li>
                    <li><NavLink to='/myDonations'>My Donations</NavLink> </li>
                </>
            }
        </>

    return (
        <div className="navbar  dark:bg-gray-900 text-black dark:text-white">
            <div className="navbar-start h-11">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 p-2 shadow dark:text-black">
                        {Links}
                    </ul>
                </div>
                <NavLink to='/'> <img className='w-16 h-16 rounded-full' src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div>
                    {user && user?.displayName
                    }
                </div>
                {
                    user && user?.email ? (<div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className='flex gap-3'>
                            <div className="w-10 h-10 border rounded-full border-sky-500 ">
                                <div className="rounded-full ">
                                    {
                                        user && user?.photoURL ? (<img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />) : (<img className="rounded-full w-10 h-10" src={UsesPic} alt="" />)
                                    }
                                </div>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dark:bg-gray-900  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                            <li>{user && user.email}</li>
                            <button onClick={handleSignOut} className='btn btn-sm'>LogOut</button>
                        </ul>
                    </div>) :
                        (<div className="dropdown dropdown-end flex items-center gap-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={UsesPic} />
                                </div>
                            </div>
                            <div>
                                <NavLink to='/login'><a className="btn btn-neutral">Login</a></NavLink>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Navbar;
