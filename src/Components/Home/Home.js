import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Table from './Table/Table';
import Slider from './Slider/Slider';

const Home = () => {

    return (
        <>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <Slider />
        </>
    );
};

export default Home;