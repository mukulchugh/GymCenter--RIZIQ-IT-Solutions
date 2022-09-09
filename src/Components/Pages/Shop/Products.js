import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const Products = ({ product }) => {
    return (
        <div className="card bg-accent border rounded">
            <figure className="w-full h-48 overflow-hidden">
                <img src={product?.image} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body items-center text-center px-0 pb-0 pt-3">
                <h2 className="card-title font-semibold">{product?.name}</h2>
                <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />{product?.original_price
                }</p>
                <p className='text-secondary text-sm mb-2'>05/10 available</p>
                <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                    <h1 className='font-bold'>Add to cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;