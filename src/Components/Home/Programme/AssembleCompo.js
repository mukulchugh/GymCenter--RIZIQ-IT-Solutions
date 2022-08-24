import React from 'react';

const AssembleCompo = () => {
    return (
        <div className='mid-container mx-auto'>
            <h1 className='text-md mt-5 mb-3'>For those who want the best of both worlds. This is a combination of CrossFit and Legion. Which means you unlock all the classes offered in our facility.</h1>
            <h1 className='text-md mb-3'>Class Type: <span className='text-primary'>Combination of CrossFit and Legion</span></h1>



            <div className="schedule lg:mb-20 md:mb-16 sm:mb-10 mb-10 md:flex items-center">
                <div className="schedule_time w-full">
                    <div class="overflow-x-auto">
                        <table class="table table-zebra table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr >
                                    <th>1 month</th>
                                    <th>3 months</th>
                                    <th>6 months</th>
                                    <th>12 months</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <td>22,000 bdt</td>
                                    <td>62,700 bdt</td>
                                    <td>1,18,800 bdt</td>
                                    <td>2,24,400 bdt</td>
                                </tr>
                                <tr className="hover">
                                    <td></td>
                                    <td>Save 5%</td>
                                    <td>Save 10%</td>
                                    <td>Save 15%</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <h1 className='font-semibold mt-2'>Classes: Max 20 classes per month</h1>
                </div>
            </div>

        </div>
    );
};

export default AssembleCompo;