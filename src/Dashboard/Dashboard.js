import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SharedNav from '../Components/Pages/Shared/SharedNav';

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
                    <ul className="menu p-4 overflow-y-auto lg:w-56 w-56  bg-accent font-bold py-10 ">

                        <li className='mb-2'><NavLink to={'/dashboard/accounts-home'}> Home</NavLink></li>
                        <li className='mb-2'><NavLink to={'/dashboard/accounts-profile'}> Profile</NavLink></li>
                        <li className='mb-2'><NavLink to={'/dashboard/manage-products'}> Products</NavLink></li>
                        <li className='mb-2'><NavLink to={'/dashboard/applications'}>Applications</NavLink></li>
                        <li className='mb-2'><NavLink to={'/dashboard/accounts-transactions'}>Transactions</NavLink></li>
                        <li className='mb-2'><NavLink to={'/dashboard/accounts-settings'}>Settings</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;