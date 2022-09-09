import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const Products = ({product}) => {
    return (
        <div className="card bg-accent border rounded">
            <figure className="px-5 pt-5">
                {/* <img src={img} alt="Shoes" className="w-full" /> */}
            </figure>
            <div className="card-body items-center text-center px-0 pb-0 pt-3">
                <h2 className="card-title font-semibold">{product?.name}</h2>
                <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                <p className='text-secondary text-sm mb-2'>05/10 available</p>
                <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                    <h1 className='font-bold'>Add to cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;