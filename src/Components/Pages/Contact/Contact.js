import React from 'react';
import SharedNav from '../Shared/SharedNav';
import logo from '../../../assets/Image/Logo/logo2.png'
import img from '../../../assets/Image/contact/Contact.png'
import Form from './Form';

const Contact = () => {
    return (
        <>
            <SharedNav />
            <div>
                <div className='mid-container'>
                    <div className='grid grid-cols-2 gap-10 mt-16'>
                        <div>
                            <img src={logo} alt="" />
                            <h2 className='font-bold text-3xl py-3 uppercase'>Contact US</h2>

                            <p className='py-3'>Flick is here to help you;
                                Our experts are available to answer any questions you might have. We’ve got the answers.</p>

                            <h2 className='text-xl font-bold uppercase mt-3'>Visit us</h2>
                            <p>Office no. G-02. Building 1, Ground Floor. Dubai</p>
                            <p>Dubai Media City – Dubai</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Email us</h2>
                            <p>email@mailserver.com</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Call us</h2>
                            <p>+000-0-000-000</p>
                            <p>+000-0-000-000</p>
                        </div>

                        <div className='w-full'>
                            <img className='w-full' src={img} alt="" />
                        </div>
                    </div>
                </div>
                <Form />
                <div className='h-[500px] w-full'>
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.16975104848854!2d90.4090285514542!3d23.793124890614084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70eb0eecca3%3A0x57d900b91d331294!2sGreen%20Grandeur!5e0!3m2!1sen!2sbd!4v1661632020017!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;