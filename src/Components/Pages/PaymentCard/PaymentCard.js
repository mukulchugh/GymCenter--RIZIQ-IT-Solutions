import React from 'react';
import SharedNav from '../Shared/SharedNav';
import './PaymentCard.css'
import bkash from '../../../assets/Image/payment/bkash.png'
import nagad from '../../../assets/Image/payment/nagad.png'
import { Link } from 'react-router-dom';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { useQuery } from 'react-query';
import Loading from '../../../hooks/Loading/Loading';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const PaymentCard = () => {
    const { token } = AuthUser();
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();

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
    const totalPrice = cartProducts?.data?.reduce((accumulator, current) => accumulator + current.sub_total_price * current.quantity, initialValue)
    // get total quantity 
    const totalQuantity = cartProducts?.data?.reduce((accumulator, current) => accumulator + current.quantity, initialValue)


    // confirm order
    const handleConfirmOrder = (data) => {
        console.log(data)
        fetch('https://gym-management97.herokuapp.com/api/product_orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                address: data.address,
                city: data.city,
                email: data.email,
                phone: data.phone,
                sub_total_price: 1400,
                delivery_charge: 40,
                payment_type: 'cash_on_delivery',
            })
        })
            .then((res) => res.json())
            .then(data => {
                if (!data.success) {
                    if (data.error === 'Something went wrong') {
                        toast.error('User with this email already exists.')
                        return;
                    } else if (data.error) {
                        toast.error(data.error)
                        return;
                    }
                } else {
                    toast.success('Product Order Successfully')
                }
            })
            .catch(err => console.log(err))
    }


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
                            <form
                                onSubmit={handleSubmit(handleConfirmOrder)}
                                className=' mt-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Name</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="name" name="name" id="" placeholder='Your Name'
                                            {...register("name", {
                                                required: 'Name is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'Name must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('name')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                                    </div>
                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Address</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="text" name="address" id="" placeholder='Your Address'
                                            {...register("address", {
                                                required: 'Address is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'Address must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('address')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.address?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Email</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="email" name="email" id="" placeholder='Your Email'
                                            {...register("email", {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid Email"
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('email')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.email?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>City</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="text" name="city" id="" placeholder='City'
                                            {...register("city", {
                                                required: 'City is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'City Name must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('city')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.city?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2' >Phone</label>
                                        <input className='py-3 rounded-md bg-[#F2F2F2] px-5 focus:outline-0' type="text" name="phone" id="" placeholder='Enter Phone Number'
                                            {...register('phone', {
                                                required: 'Phone is required',
                                                minLength: {
                                                    value: 11,
                                                    message: 'Minimum 11 character required'
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger('phone')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.phone?.message}</small>
                                    </div>

                                </div>
                                <div className='mt-10 flex items-center gap-5'>
                                    <Link className='bg-accent py-3 px-8 border rounded' to='/shop'>Back to Shop</Link>
                                    <button
                                        className='btn btn-primary ' type="submit">Confirm Order</button>
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