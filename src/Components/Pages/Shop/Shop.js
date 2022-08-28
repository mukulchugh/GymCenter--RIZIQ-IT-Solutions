import React from 'react';
import SharedNav from '../Shared/SharedNav';
import img from '../../../assets/Image/HomeShop/glo-p-img.png'
import { TbCurrencyTaka } from 'react-icons/tb';
import banner from '../../../assets/Image/shopPage/banner.jpg'

const Shop = () => {
    return (
        <>
            <SharedNav />
            <div className='mid-container'>
                <div className='grid md:grid-cols-2 md:gap-10 gap-3 md:mt-16 mt-7'>
                    <div className='w-full lg:p-20 md:p-16 bg-accent border rounded-xl overflow-hidden'>
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className='pt-3 flex items-center'>
                        <div>
                            <h2 className='text-3xl font-semibold'>Product Name</h2>
                            <div className='flex items-center'>
                                <p className='text-xl font-bold text-primary flex mt-2 mr-2'><TbCurrencyTaka className='text-2xl' />199</p>
                                <p className='text-sm flex items-center mt-2'><TbCurrencyTaka className='text-xl mb-1' /><del>369</del></p>
                            </div>
                            <p className='mt-3 text-sm text-secondary'>eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in</p>
                            <p className='mt-3 text-sm font-bold'>Quantity: <span className='text-xs'>05/10 Available</span></p>

                            <button className='px-5 py-3 mt-5 rounded text-black font-bold bg-[#FBB848]' type=""><h1>Add To Cart</h1></button>
                        </div>
                    </div>
                </div>
                <div className='my-16 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4'>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-accent border rounded">
                        <figure className="px-5 pt-5">
                            <img src={img} alt="Shoes" className="w-full" />
                        </figure>
                        <div className="card-body items-center text-center px-0 pb-0 pt-3">
                            <h2 className="card-title font-semibold">Product Name</h2>
                            <p className='text-xl font-bold text-primary flex'><TbCurrencyTaka className='text-2xl' />199</p>
                            <p className='text-secondary text-sm mb-2'>05/10 available</p>
                            <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                                <h1 className='font-bold'>Add to cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;