import React from 'react';
import SingleTable from './SingleTable';

const Table = () => {
    const morningSchedule = [
        { id: 1, time: '07:00 AM', data: 'Cross Fit' },
        { id: 2, time: '08:00 AM', data: 'Cross Fit' },
        { id: 3, time: '09:00 AM', data: 'Cross Fit' },
        { id: 4, time: '11:30 AM', data: 'Cross Fit' },
        { id: 5, time: '12:00 PM', data: 'Cross Fit' },
        { id: 6, time: '03:00 PM', data: 'Cross Fit' },
        { id: 7, time: '04:00 PM', data: 'Cross Fit' },
        { id: 8, time: '05:00 PM', data: 'Cross Fit' },
        { id: 9, time: '06:00 PM', data: 'Cross Fit' },
        { id: 10, time:'07:00 PM', data: 'Cross Fit' },
        { id: 11, time:'08:00 PM', data: 'Cross Fit' }
    ];
    return (
        <div className='mid-container mx-auto'>
            <h1 className='text-4xl font-bold text-primary mb-8 '>Work Schedule</h1>
            <SingleTable tableData={morningSchedule}/>
        </div>
    );
};

export default Table;