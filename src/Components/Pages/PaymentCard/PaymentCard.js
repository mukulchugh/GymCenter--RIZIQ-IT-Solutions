import React from 'react';
import SharedNav from '../Shared/SharedNav';
import './PaymentCard.css'
import bkash from '../../../assets/Image/payment/bkash.png'
import nagad from '../../../assets/Image/payment/nagad.png'
import { Link } from 'react-router-dom';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useQuery } from 'react-query';
import Loading from '../../../hooks/Loading/Loading';

const PaymentCard = () => {
    const {token} = AuthUser()

    const { data: cartProducts, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/product_cart/`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    const initialValue = 0;
    const totalPrice = cartProducts?.data?.reduce((accumulator,current) => accumulator + current.sub_total_price * current.quantity, initialValue)
    // get total quantity 
    const totalQuantity = cartProducts?.data?.reduce((accumulator,current) => accumulator + current.quantity, initialValue)


    return (
        <>
            <SharedNav />

            <div className='mid-container h-[100vh]'>
                <h2 className='mt-16 text-2xl font-semibold mb-5'>Payment</h2>

                <h1 className='text-xl mb-5'>Choose payment method below</h1>
                <div className='flex gap-5'>
                    <div className='w-[70%] shadow p-5'>
                        <div className='grid grid-cols-3 gap-7'>
                            <div className='bg-accent rounded-xl border flex justify-center items-center cursor-pointer'>
                                <div>
                                    <img className='mx-auto w-12' src="https://laz-img-cdn.alicdn.com/tfs/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png" alt="" />
                                    <h1 className=' text-gray-500'>Cash On Delivery</h1>
                                </div>
                            </div>
                            <div className='bg-accent rounded-xl border flex justify-center items-center  cursor-pointer'>
                                <img className='w-32' src={bkash} alt="" />
                            </div>
                            <div className='bg-accent rounded-xl border flex justify-center items-center  cursor-pointer'>
                                <img className='w-32' src={nagad} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold mt-5 text-xl'>Billing Info</h2>
                            <form className=' mt-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className='w-full'>
                                        <label className='text-gray-500' htmlFor="">Full Name</label>
                                        <input className='w-full border rounded-md p-2' type="text" />
                                    </div>

                                    <div>
                                        <label className='text-gray-500 mt-5' htmlFor="">Billing Address</label>
                                        <input className='w-full border rounded-md p-2' type="text" />
                                    </div>

                                    <div>
                                        <label className='text-gray-500 mt-5' htmlFor="">Email</label>
                                        <input className='w-full border rounded-md p-2' type="email" />
                                    </div>

                                    <div>
                                        <label className='text-gray-500 mt-5' htmlFor="">City</label>
                                        <input className='w-full border rounded-md p-2' type="text" />
                                    </div>

                                    <div>
                                        <label className='text-gray-500 mt-5' htmlFor="">Phone</label>
                                        <input className='w-full border rounded-md p-2' type="phone" />
                                    </div>

                                </div>
                                <div className='mt-10 flex items-center gap-5'>
                                    <Link className='bg-accent py-3 px-8 border rounded' to='/shop'>Back to Shop</Link>
                                    <button className='btn btn-primary ' type="submit">Confirm Order</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='w-[30%]'>
                        <div className=' shadow p-5'>
                            <h2 className='text-xl font-semibold mb-3'>Order Summery</h2>
                            <div className='flex justify-between'>
                                <h2 className='font-semibold'>Total Amount</h2>
                                <h2>৳ {totalPrice}</h2>
                            </div>
                            <div className='flex justify-between'>
                                <h2 className='font-semibold'>Quantity</h2>
                                <h2>{totalQuantity} Items</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentCard;