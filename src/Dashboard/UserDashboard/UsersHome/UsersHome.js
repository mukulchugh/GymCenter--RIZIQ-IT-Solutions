import React from 'react';

const UsersHome = () => {
    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Users!</h2>
            </div>

            <div className='mt-7 border-b-[1px] pb-3 mb-5'>
                <h2 className='font-semibold'>Account Overview</h2>
                <p className='text-secondary text-sm'>March 2022</p>
            </div>
        </div>
    );
};

export default UsersHome;