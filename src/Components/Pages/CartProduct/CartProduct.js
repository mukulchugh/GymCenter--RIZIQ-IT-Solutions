import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import SharedNav from '../Shared/SharedNav';
import { AiOutlineRight } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { Link } from 'react-router-dom';

const CartProduct = () => {
    const [cartProduct, setCartProduct] = useState([])
    const { token } = AuthUser()

    // get cart product
    useEffect(() => {
        fetch('https://gym-management97.herokuapp.com/api/product_cart/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                setCartProduct(data)
            })
    }, [token])

    console.log(cartProduct)

    return (
        <div>
            <SharedNav />

            <div className='mid-container'>
                <div className=" breadcrumbs my-5">
                    <ul className='font-semibold  flex gap-2'>
                        <Link to='/' className='hover:text-primary'>Home</Link>
                        <AiOutlineRight />
                        <Link to='/shop' className='hover:text-primary'>Cart</Link>
                        <AiOutlineRight />
                    </ul>
                </div>
                <div className='mb-24'>
                    <div className='flex justify-between bg-accent px-5 py-4 rounded font-semibold'>
                        <div className='sm:w-[45%] w-[40%]'>
                            <h2>Product</h2>
                        </div>
                        <div className='sm:w-[20%] w-[20%] text-center'>
                            <h2>Quantity</h2>
                        </div>
                        <div className='sm:w-[20%] w-[40%] text-center'>
                            <h2 >Price</h2>
                        </div>

                    </div>
                    {
                        cartProduct?.data?.map(product => (
                            <div className='my-3 flex justify-between items-center border px-5 py-3 rounded'>
                                <div className='sm:flex items-center gap-2 sm:text-start text-center sm:w-[45%] w-[40%]'>
                                    <img className='w-16 h-16 rounded-full sm:mx-0 mx-auto' src={product?.product?.image} alt="" />
                                    <h2 className='font-semibold sm:text-[16px] text-sm' >{product?.product?.name}</h2>
                                </div>
                                <h2 className='sm:w-[20%] w-[20%] text-center '>{product?.quantity
                                }</h2>
                                <div className='sm:w-[20%] w-[40%] flex items-center justify-between gap-2'>
                                    <h2 className='w-[80%] text-center flex gap-2 justify-center items-center'>৳ {product?.product?.original_price
                                    } </h2>
                                    <span className=' w-[20%] flex sm:justify-center justify-end'> <ImCancelCircle className='text-xl cursor-pointer' /></span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CartProduct;