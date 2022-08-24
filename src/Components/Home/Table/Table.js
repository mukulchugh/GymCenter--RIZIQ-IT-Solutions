import React from 'react';
import SingleTable from './SingleTable';

const Table = () => {
    const morningSchedule = [
        { id: 1, time: '06:00 am', data: 'Cross Fit' },
        { id: 2, time: '06:30 am', data: 'Cross Fit' },
        { id: 3, time: '06:00 am', data: 'Cross Fit' },
        { id: 4, time: '06:30 am', data: 'Cross Fit' },
        { id: 5, time: '07:00 am', data: 'Cross Fit' },
        { id: 6, time: '07:30 am', data: 'Cross Fit' },
        { id: 7, time: '08:00 am', data: 'Cross Fit' },
        { id: 8, time: '08:30 am', data: 'Cross Fit' },
        { id: 9, time: '09:00 am', data: 'Cross Fit' },
        { id: 10, time: '09:30 am', data: 'Cross Fit' }
    ];
    return (
        <div className='mid-container mx-auto'>
            <h1 className='text-4xl font-bold text-primary mb-10'>Work Schedule</h1>
            <SingleTable tableData={morningSchedule}/>
        </div>
    );
};

export default Table;