import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';

const TrainersHome = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='p-5  mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Trainer!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                    <div className='bg-accent px-3 py-2 rounded cursor-pointer'>
                        <BiSearch className='text-xl ' />
                    </div>
                    <div className='bg-info px-3 py-2 rounded cursor-pointer'>
                        <VscBellDot className='text-xl' />
                    </div>
                </div>
            </div>

            <div className="grid mt-16 grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className='text-md font-bold'>Workout Post</h1>
                        <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8'>+</button>
                    </div>

                    <div className='md:flex border-b py-5 justify-between items-center'>
                        <div className="date_field flex w-full items-center mb-5 md:mb-0">
                            <p className='text-sm mr-5 font-bold w-fit text-secondary'>{
                                selectedDate ? selectedDate : date
                            }</p>


                            <input onChange={(e) => {
                                setSelectedDate(e.target.value);
                            }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className='text-md font-bold'>Nutrition Post</h1>
                        <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8'>+</button>
                    </div>

                    <div className='md:flex border-b py-5 justify-between items-center'>
                        <div className="date_field flex w-full items-center mb-5 md:mb-0">
                            <p className='text-sm mr-5 font-bold w-fit text-secondary'>{
                                selectedDate ? selectedDate : date
                            }</p>


                            <input onChange={(e) => {
                                setSelectedDate(e.target.value);
                            }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <h1 className='text-md font-bold'>Nutrition Post</h1>
                        <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8'>+</button>
                    </div>

                    <div className='md:flex border-b py-5 justify-between items-center'>
                        <div className="date_field flex w-full items-center mb-5 md:mb-0">
                            <p className='text-sm mr-5 font-bold w-fit text-secondary'>{
                                selectedDate ? selectedDate : date
                            }</p>


                            <input onChange={(e) => {
                                setSelectedDate(e.target.value);
                            }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainersHome;