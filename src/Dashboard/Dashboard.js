import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SharedNav from '../Components/Pages/Shared/SharedNav';
import { FaHouseUser } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdPaid } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FaMoneyCheck } from 'react-icons/fa';
import { RiOrderPlayLine } from 'react-icons/ri';

const Dashboard = () => {
    return (
        <>
            <SharedNav />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-1">
                    <Outlet />
                </div>
                <div className="drawer-side  h-[100vh]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className=" p-4 lg:w-36 w-36  bg-accent font-bold py-10 text-center">

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/accounts-home'> <FaHouseUser className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/accounts-home'}> Home</Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/accounts-profile '> <FaUser className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/accounts-profile'}> Profile</Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/accounts-salary'> <MdPaid className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/accounts-salary'}> Salary</Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/manage-form'> <AiOutlineForm className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/manage-form'}> Form</Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/manage-orders'> <RiOrderPlayLine className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/manage-orders'}> Orders</Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/accounts-income'> <FaMoneyCheck className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/accounts-income'}> Incomes</Link>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mb-4'>
                            <div>
                                <Link to='/dashboard/accounts-expense'> <HiShoppingCart className='mx-auto text-2xl' /></Link>
                                <Link className='' to={'/dashboard/accounts-expense'}> Expense</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;