import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Carousel from '../Carousel/Carousel';
import BestSelling from './BestSelling';
import UpdateSec from './UpdateSec';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <>
            {user ? <Carousel /> : <></>}
            <UpdateSec />
            <BestSelling />
        </>
    );
};

export default Home;