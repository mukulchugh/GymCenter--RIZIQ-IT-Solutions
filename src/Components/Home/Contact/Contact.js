import React from 'react';
import img1 from '../../../assets/Image/icon/icon-1.png';
import img2 from '../../../assets/Image/icon/icon-2.png';
import img3 from '../../../assets/Image/icon/icon-3.png';
import { BsFacebook } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { MdQueryBuilder } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-primary mb-10'>Contact us</h1>
            <div className='mb-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>

                <div className=" rounded-2xl shadow-md p-3 ">
                    <div className='flex justify-center'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='lg:ml-14 md:ml-5 sm:ml-0 ml-8 pb-5'>
                        <span className='flex items-center  gap-3' ><MdQueryBuilder className='text-primary text-xl' /><h2 className=' font-semibold text-sm'>7:00AM To 10:30PM</h2></span>
                        <span className='flex items-center  gap-3 my-2' ><BsFacebook className='text-primary' /><h2 className=' font-semibold text-sm'>fb.com/CrossFitBoxDHK</h2></span>
                        <span className='flex items-center  gap-3' ><BsGlobe2 className='text-primary' /><h2 className=' font-semibold text-sm'>@CrossFitBoxDHK</h2></span>
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 ">
                    <div className='flex justify-center'>
                        <img src={img2} alt="" />
                    </div>
                    <div className=''>
                        <span className='flex items-center justify-center  gap-3 my-2' ><RiWhatsappFill className='text-primary' /><h2 className=' font-semibold text-sm'>880 18475 46080</h2></span>
                        <span className='flex items-center justify-center gap-3 my-2' ><IoCall className='text-primary' /><h2 className=' font-semibold text-sm'>880 18475 46081</h2></span>
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
                    <iframe className='w-full h-full rounded-xl border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.16975104848854!2d90.4090285514542!3d23.793124890614084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70eb0eecca3%3A0x57d900b91d331294!2sGreen%20Grandeur!5e0!3m2!1sen!2sbd!4v1661632020017!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div className='mt-5'>
                    <div className="form-control mb-3">
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Email" className="input input-bordered mb-3" />
                    </div>
                    <div className="form-control h-32">
                        <textarea className="textarea textarea-bordered h-full" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;