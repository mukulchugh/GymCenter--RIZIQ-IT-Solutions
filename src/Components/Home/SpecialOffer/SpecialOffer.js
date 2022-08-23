import React from 'react';
import productImg from '../../../assets/Special/Rectangle 5.png'

const SpecialOffer = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-extrabold text-primary mb-16'>Special Offers</h1>

            <div>
                <div>
                    <button className='btn btn-sm px-8 btn-primary' type="">SALE</button>
                    <img src={productImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;