import React from 'react';
import Computers from '../Computers/Computers';
import Monitors from '../Monitors/Monitors';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Experience from './Experience';
import Review from './Review';
import TabletsSlider from './TabletsSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabletsSlider></TabletsSlider>
            <Computers></Computers>
            <Experience></Experience>
            <Monitors></Monitors>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;