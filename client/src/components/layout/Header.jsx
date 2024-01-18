import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';


const Header = () => {

    const [auth, setAuth] = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [username, setUserName] = useState("Rohtash");


    const handleLogout = () => {
        setAuth(prevAuth => ({
            ...auth,
            user: null,
            token: '',
        }));
        toast.success("Logged out successfully");
        localStorage.removeItem('auth');
    }

    return (
        <>

            <nav className="bg-white relative mb-auto border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
                    </Link>
                    <div className="flex justify-center items-center md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>

                        <div className="relative hidden md:flex justify-center items-center">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search_navbar" className="block w-full p-2 ps-10 text-base text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Fashion" />
                        </div>
                        <div className="cart_user ml-3 flex gap-2 items-center justify-center">
                            <div to={'/cart'} className="cart cursor-pointer">
                                <FaShoppingCart size={20} color='white' />
                            </div>
                            <div className="relative">
                                <div onClick={toggleDropdown} className="user rounded-full border border-white cursor-pointer p-2 ">
                                    <FaUser size={20} color='white' />
                                </div>

                                {/* this is the dropdown list for logout and login  */}
                                {isOpen && (
                                    <div className="absolute right-0 mt-1 bg-black shadow-gray-700 rounded-md">
                                        <div>
                                            {auth.user ? (
                                                <>
                                                    {/* Show username if available */}
                                                    <NavLink className="block px-4 py-2 hover:bg-gray-500 text-white">
                                                        {auth.user.name}
                                                    </NavLink>
                                                    <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="block px-4 py-2 hover:bg-gray-500 text-white">
                                                        Dashboard
                                                    </NavLink>
                                                    <NavLink
                                                        to={'/login'} onClick={handleLogout}
                                                        className="block px-4 py-2 hover:bg-gray-500 hover:text-white bg-black text-white"
                                                    >
                                                        Logout
                                                    </NavLink>
                                                </>
                                            ) : (
                                                <>
                                                    {/* Show login and register options if username not available */}
                                                    <NavLink
                                                        to={'/login'}
                                                        className="block px-4 py-2 hover:bg-gray-500 hover:text-white bg-black text-white"
                                                    >
                                                        Login
                                                    </NavLink>
                                                    <NavLink
                                                        to={'/register'}
                                                        className="block px-4 py-2 hover:bg-gray-500 hover:text-white bg-black text-white"
                                                    >
                                                        Register
                                                    </NavLink>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search_navbar_md" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <NavLink to="/" className="block py-2 rounded text-white hover:text-blue-500" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="block py-2 rounded text-white hover:text-blue-500">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className="block py-2  hover:text-blue-500  text-white rounded">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/women" className="block  hover:text-blue-500 py-2 text-white rounded">Women</NavLink>
                            </li>
                            <li>
                                <NavLink to="/men" className="block py-2 hover:text-blue-500 text-white rounded">Men</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}

export default Header;