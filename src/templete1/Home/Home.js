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
            <h1>Thome is </h1>
            <Banner></Banner>
            <Review></Review>
            <Computers></Computers>
            <Experience></Experience>
            {/* <Monitors></Monitors> */}
            <TabletsSlider></TabletsSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;