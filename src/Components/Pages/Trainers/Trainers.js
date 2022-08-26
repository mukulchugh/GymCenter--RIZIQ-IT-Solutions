import React from 'react';
import img from '../../../assets/Image/Trainers/tbh.png'

const Trainers = () => {
    return (
        <div className='mid-container'>
            <div className='grid grid-cols-2 gap-5 mt-16'>
                <div>
                    <h1 className='text-6xl font-extrabold text-primary uppercase leading-[6rem]'>Best Professional Trainers for you</h1>
                    <img src={img} alt="" />
                </div>
                <div className='pt-8'>
                    <p className='leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
                    <button className='btn btn-primary mt-5'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Trainers;