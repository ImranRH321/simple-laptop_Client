import React from 'react';
import Computers from '../Computers/Computers';
import Monitors from '../Monitors/Monitors';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Experience from './Experience';
import OneBox from './OneBox';
import Review from './Review';
import TabletsSlider from './TabletsSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Monitors></Monitors>
            <OneBox></OneBox>
            <TabletsSlider></TabletsSlider>
            <Computers></Computers>
            <Experience></Experience>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;