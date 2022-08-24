import React from 'react';
import itemImg from '../../../assets/Special/Rectangle 8.png';
import { FaCartPlus } from 'react-icons/fa';

const Product = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 '>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">Product Name</h2>
                    <p className='text-2xl font-bold text-primary'>199Tk</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">Product Name</h2>
                    <p className='text-2xl font-bold text-primary'>199Tk</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">Product Name</h2>
                    <p className='text-2xl font-bold text-primary'>199Tk</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title font-bold">Product Name</h2>
                    <p className='text-2xl font-bold text-primary'>199Tk</p>
                    <div class="card-actions">
                        <button class="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;