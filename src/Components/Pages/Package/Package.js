import React from 'react';
import img1 from '../../../assets/Image/pricing/Fitness tracker-amico.png'
import img3 from '../../../assets/Image/pricing/Workout-amico.png'
import img2 from '../../../assets/Image/pricing/Workout-rafiki.png'
import { TbCurrencyTaka } from 'react-icons/tb';

const Package = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 md:mb-16 mb-10'>
            <div class="bg-accent shadow-xl rounded-md">
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Basic Plan</h1>
                <div className='w-36 mx-auto'>
                    <img className='w-full' src={img1} alt="Shoes" />
                </div>
                <div class="card-body pt-0">
                    <h1 class="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>2999<TbCurrencyTaka className='text-4xl m-0' /> <span className='text-xl mt-3'>/yr</span></span></h1>
                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                    <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                    <div className='ml-4 mt-3'>
                        <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                        <li className='text-sm mb-3'>Customizable Calendar</li>
                        <li className='text-sm mb-3'>Healthy Recipes</li>
                        <li className='text-sm mb-3'>Health and Fitness Articles</li>
                        <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                        <li className='text-sm'>No Credit Card Needed</li>
                    </div>
                    <div class="card-actions justify-center mt-5">
                        <button class="btn btn-primary w-full">Choose Plan</button>
                    </div>
                </div>
            </div>
            <div class="bg-accent shadow-xl rounded-md">
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Standard Plan</h1>
                <div className='w-36 mx-auto'>
                    <img className='w-full' src={img2} alt="Shoes" />
                </div>
                <div class="card-body pt-0">
                    <h1 class="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>4999<TbCurrencyTaka className='text-4xl m-0' /> <span className='text-xl mt-3'>/yr</span></span></h1>
                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                    <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                    <div className='ml-4 mt-3'>
                        <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                        <li className='text-sm mb-3'>Customizable Calendar</li>
                        <li className='text-sm mb-3'>Healthy Recipes</li>
                        <li className='text-sm mb-3'>Health and Fitness Articles</li>
                        <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                        <li className='text-sm'>No Credit Card Needed</li>
                    </div>
                    <div class="card-actions justify-center mt-5">
                        <button class="btn btn-primary w-full">Choose Plan</button>
                    </div>
                </div>
            </div>
            <div class="bg-accent shadow-xl rounded-md">
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Premium Plan</h1>
                <div className='w-36 mx-auto'>
                    <img className='w-full' src={img3} alt="Shoes" />
                </div>
                <div class="card-body pt-0">
                    <h1 class="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>8999<TbCurrencyTaka className='text-4xl m-0' /> <span className='text-xl mt-3'>/yr</span></span></h1>
                    <p className='text-sm text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                    <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                    <div className='ml-4 mt-3'>
                        <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                        <li className='text-sm mb-3'>Customizable Calendar</li>
                        <li className='text-sm mb-3'>Healthy Recipes</li>
                        <li className='text-sm mb-3'>Health and Fitness Articles</li>
                        <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                        <li className='text-sm'>No Credit Card Needed</li>
                    </div>
                    <div class="card-actions justify-center mt-5">
                        <button class="btn btn-primary w-full">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;