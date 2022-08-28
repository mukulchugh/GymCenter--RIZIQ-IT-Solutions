import React, { useContext } from 'react';
import Tabs from './Tab/Tab';
// import Tabs from './Tabs';

const Programme = () => {
    const [selectedTab, setSelectedTab] = React.useState('1all');
    // console.log(selectedTab)
    return (
        <div name='article' className="mid-container main_tabs mt-5">
            <h1 className='text-4xl font-bold text-primary mb-8 '>Our Programms</h1>
            {/* Container */}
            <Tabs
                className=""
                setSelectedTab={setSelectedTab}
                items={[
                    { to: "crossfit", name: 'CrossFit' },
                    { to: "on-ramp", name: "ON RAMP" },
                    { to: "assemble", name: "ASSEMBLE" }
                ]}
            />

        </div>
    );
};

export default Programme;
