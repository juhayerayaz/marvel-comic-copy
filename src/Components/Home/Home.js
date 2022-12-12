import React from 'react';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Shared/Navbar/Navbar';
import UpdateSec from './UpdateSec';

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <UpdateSec />
        </>
    );
};

export default Home;