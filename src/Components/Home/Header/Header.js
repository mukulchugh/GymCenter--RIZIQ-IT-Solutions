import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { BsBell, BsCart3 } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '../../../assets/Logo.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className=' sticky top-0 z-50 shadow-sm'>
            <div className="bg-gradient-to-b from-primary to-secondary hidden md:block">
                <div className="flex justify-end items-center text-white h-12 container mx-auto">


                    <Link to="https://www.facebook.com/ayon.jodder.75/"><BsBell className='ml-8 text-xl'></BsBell></Link>
                    <Link to="https://github.com/AyonJD"><BsCart3 className='ml-8 text-xl'></BsCart3></Link>
                    <Link to="https://github.com/AyonJD"><HiOutlineUser className='ml-8 text-xl'></HiOutlineUser></Link>

                </div>
            </div>

            <nav className="bg-transparent text-white absolute py-4 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex container w-[100vw] mx-auto items-center">
                            <div className="flex-shrink-0 w-fit">
                                <img className='w-3/4' onClick={() => navigate('/')} src={HeaderLogo} alt="" />
                            </div>
                            <div className="hidden md:flex justify-between items-center md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                    <Link
                                        to="/"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/tools"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Tools
                                    </Link>

                                    <Link
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        to="portfolio"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Portfolio
                                    </Link>

                                    <Link
                                        to="contact-us"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-800 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/tools"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Tools
                                </Link>



                                <Link
                                    to="/blog"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blog
                                </Link>

                                <Link
                                    to="portfolio"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Portfolio
                                </Link>

                                <Link
                                    to="/contact-us"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            <div className="banner flex items-center justify-center flex-col">
                <h1 className='text-4xl text-white'>
                    Every step is progress
                    Start Today
                </h1>
                <div className="button_section">
                    <Link to="/join-us" className="btn btn-danger">Contact Us</Link>
                    <Link to="/packages" className="btn btn-outline btn-primary">Contact Us</Link>
                </div>

            </div>
        </div>
    );
};

export default Header;