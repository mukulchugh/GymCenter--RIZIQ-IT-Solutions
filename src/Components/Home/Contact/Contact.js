import React from 'react';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import img1 from '../../../assets/Image/icon/icon-1.png';
import img2 from '../../../assets/Image/icon/icon-2.png';
import img3 from '../../../assets/Image/icon/icon-3.png';

const Contact = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-primary mb-10'>Contact us</h1>
            <div className='mb-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>

                <div className=" rounded-2xl shadow-md p-3 text-center ">
                    <div className='flex justify-center'>
                        <img src={img1} alt="" />
                    </div>
                    <div>

                        <h2 className=' font-semibold text-sm'>7:00AM To 12:30AM</h2>
                        <h2 className=' font-semibold text-sm'>fb.com/CrossFitBoxDHK</h2>
                        <h2 className=' font-semibold text-sm'>@CrossFitBoxDHK</h2>
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 text-center">
                    <div className='flex justify-center'>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h2 className=' font-semibold  text-sm'>880 18475 46080</h2>
                        <h2 className=' font-semibold  text-sm'>880 18475 46081</h2>
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 text-center ">
                    <div className='flex justify-center'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='pb-2'>
                        <h2 className='font-semibold text-sm  '>Green Grandeur (8th floor) 58/E,</h2>
                        <h2 className='font-semibold text-sm '>Kemal Ataturk Avenue</h2>
                        <h2 className='font-semibold text-sm '>Banani, Dhaka, Bangladesh</h2>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:pb-24 pb-10 md:gap-10' >
                <div className='w-full h-full rounded '>
                    <iframe class="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                </div>

                {/* <div className='pt-10 pb-5'>
                    <button className='btn btn-xs btn-primary mb-3' type="">CONTACT US</button>
                    <h1 className='text-3xl font-bold'>Start Today</h1>
                    <h1 className='text-3xl font-bold'>Start Here</h1>
                    <p className='mt-5 text-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam,</p>

                    <button className='btn btn-primary font-bold  mt-5 text-white px-8 mr-3 rounded-none' type="">JOIN CFA NOW</button>
                    <button className='btn btn-primary font-bold  mt-5 text-white px-5 rounded-none' type="">call</button>

                    <div className='mt-7 grid grid-cols-2 gap-5'>
                        <div className='flex '>
                            <GoLocation className='mr-2 mt-1 text-primary' />
                            <div>
                                <h2 className=' font-bold text-secondary'>Green Grandeur (8th floor) 58/E,</h2>
                                <h2 className=' font-bold text-secondary'>Kemal Ataturk Avenue</h2>
                                <h2 className=' font-bold text-secondary'>Banani, Dhaka, Bangladesh</h2>
                            </div>
                        </div>
                        <div className='flex '>
                            <BsWhatsapp className='mr-2 mt-1 text-primary' />

                            <div>
                                <h2 className=' font-bold text-secondary'>880 18475 46080</h2>
                                <h2 className=' font-bold text-secondary'>880 18475 46081</h2>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='mt-5'>
                    <div class="form-control mb-3">
                        <input type="text" placeholder="Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Email" class="input input-bordered mb-3" />
                    </div>
                    <div class="form-control h-32">
                    <textarea class="textarea textarea-bordered h-full" placeholder="Your Message"></textarea>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;