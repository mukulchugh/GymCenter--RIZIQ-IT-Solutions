import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { FiMinusCircle } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import Loading from '../../../hooks/Loading/Loading';
import SharedNav from '../Shared/SharedNav';

const ProductDetails = () => {
    const { productId } = useParams();
    const { token } = AuthUser()

    const { data: product, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/products/${productId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    console.log(product)
    return (
        <>
            <SharedNav />
            <div className='bg-img lg:py-36 md:py-28 py-20'>
                <div className=" breadcrumbs mid-container flex justify-center">
                    <ul className='font-semibold  text-white flex items-center justify-center gap-2'>
                        <Link to='/' className='hover:text-primary'><a >Home</a></Link>
                        <BsChevronDoubleRight />
                        <Link to='/shop' className='hover:text-primary'><a >Shop</a></Link>
                        <BsChevronDoubleRight />
                        <li to='/product/:productId' className='hover:text-primary'><a >Product Details</a></li>
                    </ul>
                </div>
            </div>

            <div className='bg-accent pt-10'>
                <div className='mid-container flex items-center gap-5 bg-white'>
                    <div className='w[40%] h-96 p-10'>
                        <img className='w-full h-full' src={product?.image} alt="" />
                    </div>
                    <div className='w-[60%] pt-5'>
                        <h1 className='text-2xl font-bold mb-2'>{product?.name}</h1>
                        <p className='text-gray-500 text-sm text-justify'>{product?.description}</p>
                        <p className=' text-2xl mt-3 font-bold text-primary'>৳ {product?.discounted_price
                        }</p>
                        <p className=' text-sm  text-secondary'><del>৳ {product?.original_price}</del></p>

                        <div className='flex items-center gap-3 mt-5'>
                            <h2 className='text-gray-500'>Quantity: </h2>
                            <FiMinusCircle className='text-2xl bg-accent cursor-pointer' />
                            <span className=''>25</span>
                            <FiPlusCircle className='text-2xl bg-accent cursor-pointer' />
                        </div>

                        <div className='mt-8'>
                            <button className='btn btn-warning text-white mr-2'>Buy Now</button>
                            <button className='btn btn-primary'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default ProductDetails;