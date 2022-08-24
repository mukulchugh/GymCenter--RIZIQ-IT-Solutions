import React from 'react';

const Contact = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 pb-20 md:gap-10' >
                <div className='w-full h-full'>
                    <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1641716772852!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

                </div>

                <div className='pt-10 pb-5'>
                    <button className='btn btn-xs btn-primary mb-3' type="">CONTACT US</button>
                    <h1 className='text-3xl font-bold'>Start Today</h1>
                    <h1 className='text-3xl font-bold'>Start Here</h1>
                    <p className='mt-5 text-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam,</p>

                    <button className='btn btn-primary font-bold text-xl mt-5 text-white px-8 mr-3 rounded-none' type="">JOIN CFA NOW</button>
                    <button className='btn btn-primary font-bold text-xl mt-5 text-white px-5 rounded-none' type="">call</button>

                    <div className='mt-7'>
                        <h2 className=' font-bold text-secondary'>CFA</h2>
                        <h2 className=' font-bold text-secondary'>711-2880 NULLA ST.</h2>
                        <h2 className=' font-bold text-secondary'>MANKATO MISSISSIPPI 96522</h2>
                        <h2 className=' font-bold text-secondary'>(257) 563-7401</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;