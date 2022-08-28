import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { BsBell, BsCart3 } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [background, setBackground] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        })
    })

    const handleDashboardNavigation = () => {
        // if (loggedInUser) {
        //     navigate('/dashboard');
        // } else {
        //     toast.error('Please Login to access this page');
        //     navigate('/login');
        // }
        navigate('/dashboard/accounts-home')
    }

    return (
        <>
            {/* <div className='relative'>
                <div className='z-20 shadow-sm '> */}
            <div className='bg-gray-800 border-b lg:pr-10 md:pr-4 z-50'>
                <div className="mid-container">
                    <div className="flex justify-end items-center text-white py-2">
                        <Link to="#"><BsBell className='ml-8 '></BsBell></Link>
                        <Link to="#"><BsCart3 className='ml-8 '></BsCart3></Link>
                        <Link to="#"><HiOutlineUser className='ml-8 '></HiOutlineUser></Link>
                        <MdOutlineSpaceDashboard onClick={handleDashboardNavigation} className='ml-8 cursor-pointer'></MdOutlineSpaceDashboard>
                    </div>
                </div>
            </div>
            <div className={`sticky z-50 top-0 ${background ? 'bg-gray-800' : 'bg-transparent'}`}>
                <div className='mid-container z-50 '>
                    <Navbar />
                </div>
            </div>

            <div className="banner -mt-[68px] z-0 w-full flex items-center justify-center flex-col">
                <h1 className='lg:text-5xl uppercase md:text-4xl text-3xl font-extrabold text-white text-center'>
                    Every step is progress <br />
                    Start Today
                </h1>
                <div className="button_section mt-8">
                    <Link to="/join-us" className="btn btn-primary lg:w-[150px] md:w-[140px] lg:h-[50px] md:h-[45px] join_gym_button lg:text-lg font-bold ">JOIN GYM</Link>
                    <Link to="/packages" className="btn btn-outline ml-4 package_button btn-primary lg:w-[150px] md:w-[140px] lg:h-[50px] md:h-[45px] lg:text-lg font-bold text-white">PACKAGE</Link>
                </div>
            </div>
            {/* </div>
            </div> */}
        </>
    );
};

export default Header;





