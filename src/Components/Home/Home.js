import React from 'react';
import Carousel from '../Carousel/Carousel';
import BestSelling from './BestSelling';
import UpdateSec from './UpdateSec';

const Home = () => {
    return (
        <>
            <Carousel />
            <UpdateSec />
            <BestSelling />
        </>
    );
};

export default Home;