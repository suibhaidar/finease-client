import { signOut } from 'firebase/auth';
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user } = use(AuthContext)
    console.log(user)

    const handleLogout = () => {
        signOut(auth)
            .then(() => console.log("User logged out"))
            .catch((err) => console.error(err));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="font-medium text-[#0e2820] hover:text-[#5C7AEA]">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/add-transaction" className="font-medium hover:text-[#5C7AEA]">
                    Add Transaction
                </NavLink>
            </li>
            <li>
                <NavLink to="/my-transactions" className="font-medium hover:text-[#5C7AEA]">
                    My Transactions
                </NavLink>
            </li>
            <li>
                <NavLink to="/reports" className="font-medium hover:text-[#5C7AEA]">
                    Reports
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-[#d8e3f0] shadow-sm">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div> */}
                    <div className="navbar-start flex items-center relative">
                        <img src="https://i.ibb.co.com/JRT4DXCK/Adobe-Express-file.png" alt="FinEase Logo" className="w-12 h-12 rounded-full" />
                        <Link to="/" className="text-2xl font-bold text-[#1C352D] absolute left-7">
                            <span className="text-[#61839B]">Fin</span>Ease
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">

                    <div className='flex space-x-3'>
                        <input type="checkbox" defaultChecked className="toggle" />
                        {
                            user ? (
                                <div className='flex items-center gap-3'>

                                    <img
                                        src={
                                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                                        alt="User"
                                        className="w-9 h-9 rounded-full border-2 border-[#5C7AEA]"
                                        title={'user.name'}
                                    />
                                    <Link to={''} className='btn btn-outline btn-sm'>My Profile</Link>
                                    <button onClick={handleLogout} className='btn btn-outline btn-sm'>Logout</button>
                                </div>



                            ) : (
                                <div className="space-x-3 mt-2 hidden lg:flex">
                                    <Link to="/auth/login" className="btn btn-outline btn-sm border-[#1C352D] text-[#5C7AEA]">
                                        Login
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        className="btn btn-sm bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white border-none"
                                    >
                                        Signup
                                    </Link>


                                </div>)
                        }


                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                            {!user && (<div className="flex space-x-3 mt-2">
                                <Link to="/auth/login" className="btn btn-outline btn-sm border-[#1C352D] text-[#5C7AEA]">
                                    Login
                                </Link>
                                <Link
                                    to="/auth/register"
                                    className="btn btn-sm bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white border-none"
                                >
                                    Signup
                                </Link>
                            </div>)}
                        </ul>

                    </div>
                </div> */}

                <div className="navbar-end flex items-center gap-3">
                    {/* Toggle switch */}
                    <input type="checkbox" defaultChecked className="toggle" />

                    {user ? (
                        <>
                            {/* My Profile button first */}
                            <Link to="/my-profile" className="btn btn-outline btn-sm">
                                My Profile
                            </Link>

                            {/* Avatar + dropdown */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-9 h-9 rounded-full border-2 border-[#5C7AEA]">
                                        <img
                                            src={user.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                                            alt={user.displayName || "User"}
                                        />
                                    </div>
                                </div>

                                {/* Dropdown content */}
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow bg-base-100 rounded-box w-52 border-3 border-[#1C352D]"
                                >
                                    <li className=''><img className='w-24 h-22 rounded-[50%]' src={user.photoURL} alt="" /></li>
                                    <li className="font-semibold text-gray-700"> Name:{user.displayName}</li>
                                    <li className="text-sm text-gray-500">Email:{user.email}</li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-outline btn-sm w-full mt-2 bg-[#1C352D] text-white"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        // Login / Signup buttons
                        <div className="space-x-3 hidden lg:flex">
                            <Link
                                to="/auth/login"
                                className="btn btn-outline btn-sm border-[#1C352D] text-[#5C7AEA]"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="btn btn-sm bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white border-none"
                            >
                                Signup
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                            {!user && (
                                <div className="flex space-x-3 mt-2">
                                    <Link
                                        to="/auth/login"
                                        className="btn btn-outline btn-sm border-[#1C352D] text-[#5C7AEA]"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        className="btn btn-sm bg-gradient-to-r from-[#1C352D] to-[#6AA97B] text-white border-none"
                                    >
                                        Signup
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Navbar;