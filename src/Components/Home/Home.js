import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';
import Slider from './Slider/Slider';
import Programme from './Programme/Programme';
import Testimonials from '../Pages/Testimonials/Testimonials';

const Home = () => {

    return (
        <div>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <Programme />
            <Slider />
            <SpecialOffer />
            <Contact />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;