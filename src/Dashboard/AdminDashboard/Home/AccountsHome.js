import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { TbCurrencyTaka } from 'react-icons/tb';
import AccountsTable from './AccountsTable';
import { BsPlusLg } from 'react-icons/bs';

const AccountsHome = () => {
    return (
        <div className='p-5 mt-4'>
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

            <div className='grid sm:grid-cols-3 bg-[#FEEDD1] sm:py-8 mb-8'>
                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white mb-5'>
                    <div className='sm:py-8 pt-5 pb-2'>
                        <h1 className='font-bold text-xl text-center'>Current Balance</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl  font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white relative'>
                    <div className='bg-primary shadow-xl text-white p-2 rounded cursor-pointer absolute lg:-mt-32 md:-mt-24 sm:-mt-28 -mt-14 lg:-mr-60 md:-mr-52 sm:-mr-40 -mr-60'>
                        <BsPlusLg className=' font-extrabold' />
                    </div>
                    <div className='text-primary sm:py-8  pb-2'>
                        <h1 className='font-bold text-xl'>Total Expense</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center relative'>
                    <div className='bg-primary shadow-xl text-white p-2 rounded cursor-pointer absolute lg:-mt-32 md:-mt-24 sm:-mt-28 -mt-10 lg:-mr-60 md:-mr-52 sm:-mr-40 -mr-60'>
                        <BsPlusLg className=' font-extrabold' />
                    </div>
                    <div className='text-success sm:py-8 pt-5 pb-4'>
                        <h1 className='font-bold text-xl'>Total Income</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />100</h2>
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