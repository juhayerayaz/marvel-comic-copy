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
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='absolute z-10 text-white w-[690px] mx-36 pl-7 pb-14 mt-24'>
                        <a href="https://www.marvel.com/articles/comics/mcu-infinity-saga-covers-phase-three" target={"_blank"} rel="noreferrer">
                            <div className='mb-4 left-0'>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                                <h1 className='text-lg font-bold uppercase'>This February</h1>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
                            </div>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/mcu-infinity-saga-covers-phase-three" target={"_blank"} rel="noreferrer">
                            <h1 className='text-[2.5rem] font-bold mb-8'>MCU VARIANT COVERS CELEBRATE THE EPIC FILMS OF THE INFINITY SAGA</h1>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/mcu-infinity-saga-covers-phase-three" className="relative px-6 py-4 font-medium text-white" target={"_blank"} rel="noreferrer">
                            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-zinc-50 hover:border-[#c6a972] hover:border btn-shape"></span>
                            <span className="relative uppercase text-sm font-semibold">First Look!</span>
                        </a>
                    </div>
                    <div className='slideimg1'>
                        <div className='h-[36rem] bg-gradient-to-b from-zinc-800 to-black opacity-60'>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute z-10 text-white w-[690px] mx-36 pl-7 pb-14 mt-24'>
                        <a href="https://www.marvel.com/articles/comics/december-7-2022-new-marvel-comics-collections-releases-full-list" target={"_blank"} rel="noreferrer">
                            <div className='mb-4 left-0'>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                                <h1 className='text-lg font-bold uppercase'>Weekly releases</h1>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
                            </div>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/december-7-2022-new-marvel-comics-collections-releases-full-list" target={"_blank"} rel="noreferrer">
                            <h1 className='text-[2.5rem] font-bold mb-8'>NEW COMICS THIS WEEK</h1>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/december-7-2022-new-marvel-comics-collections-releases-full-list" className="relative px-6 py-4 font-medium text-white" target={"_blank"} rel="noreferrer">
                            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-zinc-50 hover:border-[#c6a972] hover:border btn-shape"></span>
                            <span className="relative uppercase text-sm font-semibold">Full List!</span>
                        </a>
                    </div>
                    <div className='slideimg2'>
                        <div className='h-[36rem] bg-gradient-to-b from-zinc-800 to-black opacity-60'>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute z-10 text-white w-[690px] mx-36 pl-7 pb-14 mt-24'>
                        <a href="https://www.marvel.com/articles/comics/jason-aaron-avengers-assemble-forever-run" target={"_blank"} rel="noreferrer">
                            <div className='mb-4 left-0'>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                                <h1 className='text-lg font-bold uppercase'>This March</h1>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
                            </div>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/jason-aaron-avengers-assemble-forever-run" target={"_blank"} rel="noreferrer">
                            <h1 className='text-[2.5rem] font-bold mb-8'>THE FINAL BATTLE IN JASON AARON'S AVENGERS RUN</h1>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/jason-aaron-avengers-assemble-forever-run" className="relative px-6 py-4 font-medium text-white" target={"_blank"} rel="noreferrer">
                            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-zinc-50 hover:border-[#c6a972] hover:border btn-shape"></span>
                            <span className="relative uppercase text-sm font-semibold">Read now!</span>
                        </a>
                    </div>
                    <div className='slideimg3'>
                        <div className='h-[36rem] bg-gradient-to-b from-zinc-800 to-black opacity-60'>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute z-10 text-white w-[690px] mx-36 pl-7 pb-14 mt-24'>
                        <a href="https://www.marvel.com/articles/comics/x-men-alternate-timelines-list" target={"_blank"} rel="noreferrer">
                            <div className='mb-4 left-0'>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                                <h1 className='text-lg font-bold uppercase'>Marvel unlimited</h1>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
                            </div>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/x-men-alternate-timelines-list" target={"_blank"} rel="noreferrer">
                            <h1 className='text-[2.5rem] font-bold mb-8'>THE X-MEN'S PIVOTAL ALTERNATE TIMELINES</h1>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/x-men-alternate-timelines-list" className="relative px-6 py-4 font-medium text-white" target={"_blank"} rel="noreferrer">
                            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-zinc-50 hover:border-[#c6a972] hover:border btn-shape"></span>
                            <span className="relative uppercase text-sm font-semibold">Read Now!</span>
                        </a>
                    </div>
                    <div className='slideimg4'>
                        <div className='h-[36rem] bg-gradient-to-b from-zinc-800 to-black opacity-60'>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='absolute z-10 text-white w-[690px] mx-36 pl-7 pb-14 mt-24'>
                        <a href="https://www.marvel.com/articles/comics/wasp-1-2023-first-look-preview-janet-nadia-whirlwind" target={"_blank"} rel="noreferrer">
                            <div className='mb-4 left-0'>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                                <h1 className='text-lg font-bold uppercase'>First look</h1>
                                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
                            </div>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/wasp-1-2023-first-look-preview-janet-nadia-whirlwind" target={"_blank"} rel="noreferrer">
                            <h1 className='text-[2.5rem] font-bold mb-8'>'WASP' #1 PITS JANET & NADIA AGAINST A CLASSIC SUPER VILLAIN</h1>
                        </a>
                        <a href="https://www.marvel.com/articles/comics/wasp-1-2023-first-look-preview-janet-nadia-whirlwind" className="relative px-6 py-4 font-medium text-white" target={"_blank"} rel="noreferrer">
                            <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-zinc-50 hover:border-[#c6a972] hover:border btn-shape"></span>
                            <span className="relative uppercase text-sm font-semibold">Preview!</span>
                        </a>
                    </div>
                    <div className='slideimg5'>
                        <div className='h-[36rem] bg-gradient-to-b from-zinc-800 to-black opacity-60'>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;