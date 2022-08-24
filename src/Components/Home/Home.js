import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';

const Home = () => {

    return (
        <>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <SpecialOffer />
        </>
    );
};

export default Home;