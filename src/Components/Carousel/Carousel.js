import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './carousel.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                loop={true}
                navigation={true}
                pagination={true}
            >
                <SwiperSlide><div className='py-28'><h1 className='text-center'>Hello</h1></div></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;