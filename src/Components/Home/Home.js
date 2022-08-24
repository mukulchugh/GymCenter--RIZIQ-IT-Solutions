import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';

const Home = () => {

    return (
        <div>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <SpecialOffer />
            <Contact/>
        </div>
    );
};

export default Home;