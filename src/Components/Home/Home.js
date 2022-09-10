import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';
import Slider from './Slider/Slider';
import Programme from './Programme/Programme';
import AuthUser from '../../hooks/AuthUser/AuthUser';
import CrossfitProgramme from './Programme/CrossfitProgramme/CrossfitProgramme';
import SecondProgramme from './Programme/SecondProgramme';
import ThirdProgramme from './Programme/ThirdProgramme';

const Home = () => {

    const { email } = AuthUser()
    // console.log(email)

    return (
        <div>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <CrossfitProgramme />
            <>
                <Programme />
                <SecondProgramme />
                <ThirdProgramme />
            </>
            <Slider />
            <SpecialOffer />
            <Contact />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;