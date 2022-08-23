import React from 'react';

const Table = () => {
    const tableData = [
        { id: 1, time: '06:00 am', data: 'Cross Fit' },
        { id: 2, time: '06:30 am', data: 'Cross Fit' },
        { id: 3, time: '06:00 am', data: 'Cross Fit' },
        { id: 4, time: '06:30 am', data: 'Cross Fit' },
        { id: 5, time: '07:00 am', data: 'Cross Fit' },
        { id: 6, time: '07:30 am', data: 'Cross Fit' },
        { id: 7, time: '08:00 am', data: 'Cross Fit' },
        { id: 8, time: '08:30 am', data: 'Cross Fit' },
        { id: 9, time: '09:00 am', data: 'Cross Fit' },
        { id: 10, time: '09:30 am', data: 'Cross Fit' },
    ]
    return (
        <div className='container mx-auto'>
            <h1 className='text-primary'>Work Schedule</h1>
            <div className="schedule ">
                <div className="schedule_item">
                    <h1>Morning Schedule</h1>
                </div>
                <div className="schedule_time">
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th className='text-primary'>Time</th>
                                    <th>mon</th>
                                    <th>tue</th>
                                    <th>wed</th>
                                    <th>thu</th>
                                    <th>fri</th>
                                    <th>sat</th>
                                    <th>sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td className='text-primary'>{item.time}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                                <td>{item.data}</td>
                                            </tr>
                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;