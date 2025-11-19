import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import navbarImg from '../assets/Adobe Express - file (1).png';
const Navbar = () => {

    const { user,logOut } = use(AuthContext);

    const handleLogout = () => {
                logOut()
            .then(() => console.log("User logged out"))
            .catch((err) => console.error(err));
        
    };

    const handleThemeToggle = (e) =>{
        if (e.target.checked) {
            document.querySelector('html').setAttribute('data-theme','dark')
        }else {
            document.querySelector('html').setAttribute('data-theme','light')
        }
    }

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="font-medium hover:text-[#5C7AEA]">
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
        <div className="bg-base-200 shadow-sm">
            <div className="navbar container mx-auto px-3">

                {/* LEFT */}
                <div className="navbar-start">
                    <div className="flex items-center relative">
                        <img
                            src={navbarImg}
                            // "https://i.ibb.co.com/JRT4DXCK/Adobe-Express-file.png"
                            alt="FinEase Logo"
                            className="w-12 h-14 rounded-full"
                        />
                        <Link to="/" className="text-2xl font-bold text-primary absolute left-7">
                            <span className="text-secondary">Fin</span>Ease
                        </Link>
                    </div>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end flex items-center gap-3">

                    <input onChange={handleThemeToggle} type="checkbox" className="toggle" />

                    {user ? (
                        <>
                            {/* My Profile - Desktop + Mobile */}
                            <Link
                                to="/auth/myProfile"
                                className="btn btn-outline btn-sm hidden lg:block items-center "
                            >
                                My Profile
                            </Link>

                            {/* Avatar Dropdown */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-2 border-[#5C7AEA]">
                                        <img
                                            src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                                            alt="User"
                                        />
                                    </div>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-20 p-3 shadow bg-base-100 rounded-box w-52 border-[3px] border-[#1C352D]"
                                >
                                    <li className="flex justify-center mb-2">
                                        <img
                                            className="w-20 h-20 rounded-full"
                                            src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                                            alt="User"
                                        />
                                    </li>
                                    <li className="font-semibold">
                                        Name: {user.displayName || "User"}
                                    </li>
                                    <li className="text-sm">
                                        Email: {user.email}
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="btn btn-outline btn-sm w-full mt-2 bg-primary text-white"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="space-x-3 hidden lg:flex">
                            <Link
                                to="/auth/login"
                                className="btn btn-outline btn-sm border-secondary text-primary"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="btn btn-sm bg-gradient-to-r from-[#0F1D46] to-[#01b2ca] text-base-100"
                            >
                                Signup
                            </Link>
                        </div>
                    )}

                    {/* Mobile Dropdown */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-56 p-3 shadow"
                        >
                            {navLinks}

                            {!user && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <Link
                                        to="/auth/login"
                                        className="btn btn-outline btn-sm border-secondary text-primary"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/auth/register"
                                        className="btn btn-sm bg-gradient-to-r from-[#0F1D46] to-[#01b2ca] text-primary"
                                    >
                                        Signup
                                    </Link>
                                </div>
                            )}

                            {user && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <Link
                                        to="/auth/myProfile"
                                        className="btn btn-outline btn-sm"
                                    >
                                        My Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-sm bg-primary text-base-100"
                                    >
                                        Logout
                                    </button>
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
