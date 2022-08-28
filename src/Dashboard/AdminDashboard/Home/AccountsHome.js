import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { TbCurrencyTaka } from 'react-icons/tb';
import AccountsTable from './AccountsTable';

const AccountsHome = () => {
    return (
        <div className='p-5 mt-10'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>12 Apr 2022, Tuesday</p>
                    <div className='bg-accent px-3 py-2 rounded cursor-pointer'>
                        <BiSearch className='text-xl ' />
                    </div>
                    <div className='bg-info px-3 py-2 rounded cursor-pointer'>
                        <VscBellDot className='text-xl' />
                    </div>

                </div>
            </div>

            <div className='mt-7 border-b-[1px] pb-3'>
                <h2 className='font-semibold'>Account Overview</h2>
                <p className='text-secondary text-sm'>March 2022</p>
            </div>

            <div className='grid grid-cols-3 bg-neutral py-8 mb-8'>
                <div className='flex items-center justify-center border-r-2 border-white'>
                    <div className='py-10 '>
                        <h1 className='font-bold text-xl'>Current Balance</h1>
                        <h2 className='flex items-center justify-center text-3xl font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>
                <div className='flex items-center justify-center border-r-2 border-white'>
                    <div className='text-primary py-10'>
                        <h1 className='font-bold text-xl'>Total Expense</h1>
                        <h2 className='flex items-center justify-center text-3xl font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='text-success py-10'>
                        <h1 className='font-bold text-xl'>Total Income</h1>
                        <h2 className='flex items-center justify-center text-3xl font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>
            </div>

            <div className='mb-8 '>
                03 Mar 2022, Thursday
            </div>

            <AccountsTable />
        </div>
    );
};

export default AccountsHome;