import React from 'react';

const SingleTable = ({ tableData, topic }) => {
    return (
        <div className="schedule lg:mb-20 md:mb-16 sm:mb-10 mb-10 md:flex items-center">
            <div className="schedule_time w-full">
                <div class="overflow-x-auto">
                    <table class="table table-zebra table_border table-compact w-full">
                        <thead className='table_border rounded-2xl'>
                            <tr >
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
                                        <tr key={item.id} className="hover">
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
    );
};

export default SingleTable;