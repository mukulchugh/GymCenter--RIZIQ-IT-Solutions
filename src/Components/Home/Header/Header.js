import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { BsBell, BsCart3 } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '../../../assets/Logo.svg'
import Navbar from './Navbar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <div className=' sticky top-0 z-50 shadow-sm '>
            <div className=' bg-[#0E1329] pr-4'>
                <div className=" hidden md:block mid-container">
                    <div className="flex justify-end items-center text-white h-12">

                        <Link to="https://www.facebook.com/ayon.jodder.75/"><BsBell className='ml-8 text-xl'></BsBell></Link>
                        <Link to="https://github.com/AyonJD"><BsCart3 className='ml-8 text-xl'></BsCart3></Link>
                        <Link to="https://github.com/AyonJD"><HiOutlineUser className='ml-8 text-xl'></HiOutlineUser></Link>

                    </div>
                </div>
            </div>

            <div className='mid-container z-30'>
                <Navbar />
            </div>

            <div className="banner -mt-[88px] z-0 w-full flex items-center justify-center flex-col">
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold text-white text-center'>
                    Every step is progress <br/>
                    Start Today
                </h1>
                <div className="button_section mt-8">
                    <Link to="/join-us" className="btn btn-primary w-[150px] h-[60px] text-xl font-bold">JOIN GYM</Link>
                    <Link to="/packages" className="btn btn-outline ml-4 btn-accent w-[150px] h-[60px] text-xl font-bold">PACKAGE</Link>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Header;





