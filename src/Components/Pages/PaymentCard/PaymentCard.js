import React from 'react';
import SharedNav from '../Shared/SharedNav';
import './PaymentCard.css'
import bkash from '../../../assets/Image/payment/bkash.png'
import nagad from '../../../assets/Image/payment/nagad.png'

const PaymentCard = () => {
    return (
        <>
            <SharedNav />
            {/*  <article class="card">
                <div class="container">
                    <div class="card-title">
                        <h2>Payment</h2>
                    </div>
                    <div class="card-body">
                        <div class="payment-type">
                            <h4>Choose payment method below</h4>
                            <div class="types flex justify-space-between">
                                <div class="type selected">
                                    <div class="logo">
                                        <i class="far fa-credit-card"></i>
                                    </div>
                                    <div class="text">
                                        <p>Pay with Credit Card</p>
                                    </div>
                                </div>
                                <div class="type">
                                    <div class="logo">
                                        <i class="fab fa-paypal"></i>
                                    </div>
                                    <div class="text">
                                        <p>Pay with PayPal</p>
                                    </div>
                                </div>
                                <div class="type">
                                    <div class="logo">
                                        <i class="fab fa-amazon"></i>
                                    </div>
                                    <div class="text">
                                        <p>Pay with Amazon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="payment-info flex justify-space-between">
                            <div class="column billing">
                                <div class="title">
                                    <div class="num">1</div>
                                    <h4>Billing Info</h4>
                                </div>
                                <div class="field full">
                                    <label for="name">Full Name</label>
                                    <input id="name" type="text" placeholder="Full Name" />
                                </div>
                                <div class="field full">
                                    <label for="address">Billing Address</label>
                                    <input id="address" type="text" placeholder="Billing Address" />
                                </div>
                                <div class="flex justify-space-between">
                                    <div class="field half">
                                        <label for="city">City</label>
                                        <input id="city" type="text" placeholder="City" />
                                    </div>
                                    <div class="field half">
                                        <label for="state">State</label>
                                        <input id="state" type="text" placeholder="State" />
                                    </div>
                                </div>
                                <div class="field full">
                                    <label for="zip">Zip</label>
                                    <input id="zip" type="text" placeholder="Zip" />
                                </div>
                            </div>
                            <div class="column shipping">
                                <div class="title">
                                    <div class="num">2</div>
                                    <h4>Credit Card Info</h4>
                                </div>
                                <div class="field full">
                                    <label for="name">Cardholder Name</label>
                                    <input id="name" type="text" placeholder="Full Name" />
                                </div>
                                <div class="field full">
                                    <label for="address">Card Number</label>
                                    <input id="address" type="text" placeholder="1234-5678-9012-3456" />
                                </div>
                                <div class="flex justify-space-between">
                                    <div class="field half">
                                        <label for="city">Exp. Month</label>
                                        <input id="city" type="text" placeholder="12" />
                                    </div>
                                    <div class="field half">
                                        <label for="state">Exp. Year</label>
                                        <input id="state" type="text" placeholder="19" />
                                    </div>
                                </div>
                                <div class="field full">
                                    <label for="zip">CVC Number</label>
                                    <input id="zip" type="text" placeholder="468" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-actions flex justify-space-between">
                        <div class="flex-start">
                            <button class="button button-secondary">Return to Store</button>
                        </div>
                        <div class="flex-end">
                            <button class="button button-link">Back to Shipping</button>
                            <button class="button button-primary">Proceed</button>
                        </div>
                    </div>
                </div>
            </article> */}

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
                                <button className='btn btn-primary mt-10 w-full' type="submit">Confirm Order</button>
                            </form>
                        </div>
                    </div>

                    <div className='w-[30%]'>
                        <div className=' shadow p-5'>
                            <h2 className='font-semibold mb-3'>Order Summery</h2>
                            <div className='flex justify-between'>
                                <h2>Total Amount</h2>
                                <h2>4800.00</h2>
                            </div>
                            <div className='flex justify-between'>
                                <h2>Quantity</h2>
                                <h2>4800.00</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentCard;