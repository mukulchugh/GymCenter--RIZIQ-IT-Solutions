import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import OrdersTable from './OrdersTable';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { useQuery } from 'react-query';
import Package from './Package';

const Orders = () => {
    const { token } = AuthUser()
    const{packages} = Package()
    

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

    console.log(products.data)
    // useEffect(() => {
    //     const url = "https://gym-management97.herokuapp.com/api/package_order";
    
    //     fetch(url, {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setPackages(data.data));
    //   }, [token]);


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

            <div className='mb-5'>
                <div class="overflow-x-auto ">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr className='bg-accent'>
                                <th className='bg-accent'></th>
                                <th className='bg-accent'>Name</th>
                                <th className='bg-accent'>Date</th>
                                <th className='bg-accent'>Amount</th>
                                <th className='bg-accent'>Payment Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.data?.map((product, index) => <OrdersTable
                                key={product?.id}
                                product={product}
                                index={index}
                                ></OrdersTable>)
                            }
                            {/* {
                                products?.data?.map((product, index) => <OrdersTable
                                key={product?.id}
                                product={product}
                                index={index}
                                ></OrdersTable>)
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;