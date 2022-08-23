import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Table from './Table/Table';

const Home = () => {

    return (
        <>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
        </>
    );
};

export default Home;