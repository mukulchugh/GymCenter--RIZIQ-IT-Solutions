import React from 'react';
import img from '../../../assets/Image.png'

const About = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-10'>
                <div className='flex md:justify-start justify-center w-full mb-10'>
                    <img className='lg:w-[500px] md:w-[350px]' src={img} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <button className='btn btn-primary btn-sm' type="">About US</button>
                        <h1 className='lg:text-4xl md:text-3xl text-3xl font-bold lg:my-5 md:my-3 my-4'>ALL progress takes place outside the comfort zone</h1>
                        <p className='text-secondary lg:leading-[25px] md:leading-[25px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam, rem deleniti minus.</p>

                        <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus repellat autem officia voluptatem quis optio ullam doloribus ipsam,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;