import React from 'react';

const   = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>
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
        </div>
    );
};

export default  ;