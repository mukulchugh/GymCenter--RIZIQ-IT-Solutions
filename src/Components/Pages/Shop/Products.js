import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {

    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/product/${product?.id}`);
    };


    return (
        <div onClick={() => handleClick(product?.id)}
            className="card shadow rounded cursor-pointer">

            <figure className="w-full h-48 overflow-hidden p-3 rounded">
                <img src={product?.image} alt="Shoes" className="w-full h-full rounded" />
            </figure>
            <div className="card-body items-center text-center px-0 pb-0 pt-3">
                <h2 className="card-title font-semibold">{product?.name}</h2>
                <p className='text-xl font-bold text-primary flex items-center'>৳{product?.discounted_price
                }<span className='text-sm ml-2 text-secondary '> <del>
                    {product?.original_price}
                </del> </span></p>
                <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                    <h1 className='font-bold'>Add to cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;