import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Category from '../Category/Category';
import avatar from '../../assets/avatar.jpeg'
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const Navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)

    console.log(user);

    const logOutHandle = () => {
        logOut()
            .then(() => {
                Navigate('/login')
            })
            .catch((error) => {
                Swal.fire(`${error}`)
            })
    }
    return (
        <div className="dark:bg-white shadow-lg h-20">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex text-gray-900 items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-10 h-10 rounded-full dark:text-gray-900 bg-indigo-400 p-2">
                            <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                        </svg>
                        <span className="ml-2 text-2xl font-bold tracking-wide uppercase">
                            BD Developers
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/home"
                                    aria-label="Home"
                                    title="Home"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                            : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/course"
                                    aria-label="Course"
                                    title="Course"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                            : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                    }
                                >
                                    Course
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                            : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about us"
                                    aria-label="about"
                                    title="about us"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                            : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>

                        </ul>
                        {
                            user?.uid ? <>
                                <li>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 shadow-xl rounded-full">
                                                {
                                                    user?.photoURL ? <img title={`${user.displayName}`} src={user.photoURL} alt="" /> : <img src={avatar} alt="" />
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52 text-gray-900 font-medium">
                                            <li>
                                                <Link to='/profile' className="justify-between ">
                                                    Profile
                                                    <span className="badge bg-red-900 text-white">New</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={logOutHandle}>Logout</button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </> : <>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                                : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                        }
                                        aria-label="Sign in"
                                        title="Sign in"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-red-600 font-medium text-xl tracking-wide hover:text-teal-accent-400"
                                                : "font-medium text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                                        }
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        }
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className="relative">
                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-100 peer-checked:dark:bg-indigo-900"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                        </label>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-6 text-gray-900" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute z-50 top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <svg
                                                    className="w-8 text-gray-900"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
                                                    BD Developers
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-1xl text-gray-100 block text-start mx-auto mt-2 font-bold border p-3 rounded-lg bg-slate-500"
                                                            : "text-1xl text-gray-900 block font-bold text-start mx-auto mt-2 border p-3 rounded-lg bg-slate-300 hover:bg-slate-400"
                                                    }
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/profile"
                                                    aria-label="Profile"
                                                    title="Profile"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-1xl text-gray-100 block text-start mx-auto mt-2 font-bold border p-3 rounded-lg bg-slate-500"
                                                            : "text-1xl text-gray-900 block font-bold text-start mx-auto mt-2 border p-3 rounded-lg bg-slate-300 hover:bg-slate-400"
                                                    }
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <Category />
                                            <li>
                                                <NavLink
                                                    to="/about"
                                                    aria-label="About us"
                                                    title="About us"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-1xl text-gray-100 block text-start mx-auto mt-2 font-bold border p-3 rounded-lg bg-slate-500"
                                                            : "text-1xl text-gray-900 block font-bold text-start mx-auto mt-2 border p-3 rounded-lg bg-slate-300 hover:bg-slate-400"
                                                    }
                                                >
                                                    About us
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a
                                                    href="/"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    Sign up
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;