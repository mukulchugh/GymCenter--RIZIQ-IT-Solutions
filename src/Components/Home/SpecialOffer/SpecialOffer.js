import React from 'react';
import productImg from '../../../assets/Special/Rectangle 5.png'
import Product from './Product';
import { TbCurrencyTaka } from 'react-icons/tb';

const SpecialOffer = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-primary mb-10'>Special Offers</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 pb-20'>
                <div >
                    <button className='btn btn-sm px-8 btn-primary text-white mb-5' type="">SALE</button>
                    <img className='mx-auto' src={productImg} alt="" />
                    <h2 className='text-3xl font-bold my-5 md:text-start text-center'>Product Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam, rem deleniti minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam, rem deleniti minus.</p>

                    <div className='flex justify-between my-10'>
                        <h1 className='text-3xl font-extrabold flex'><TbCurrencyTaka/> 599</h1>
                        <button className='btn btn-neutral rounded-full px-6 text-white font-bold' type="">ADD TO CART</button>
                    </div>
                </div>
                <div>
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;