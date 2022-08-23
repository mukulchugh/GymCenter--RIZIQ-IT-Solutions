import React from 'react';

const SingleTable = ({ tableData, topic }) => {
    return (
        <div className="schedule mb-20 md:flex items-center">
            <div className="schedule_item">
                <h1 className='text-[20px] mb-5 md:mb-0 font-bold w-full md:w-[15%] md:mr-6'>{topic}</h1>
            </div>
            <div className="schedule_time w-full md:w-[83%]">
                <div class="overflow-x-auto">
                    <table class="table table_border table-compact w-full">
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