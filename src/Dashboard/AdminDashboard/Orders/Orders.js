import React from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import OrdersTable from './OrdersTable';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { useQuery } from 'react-query';

const Orders = () => {
    const { token } = AuthUser()

    const { data: products, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/product_orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            
    )
    if (isLoading) {
        return <Loading />
    }


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
                <h2 className='font-semibold'>Salary Overview</h2>
                <p className='text-secondary text-sm'>March 2022</p>
            </div>

            <div className='mb-8 '>
                03 Mar 2022, Thursday
            </div>

            <OrdersTable salaryDetails={products.data} />
        </div>
    );
};

export default Orders;