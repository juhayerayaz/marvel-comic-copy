import React from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../Imgs/silde1.jpg'
import slide2 from '../Imgs/silde2.jpg'
import slide3 from '../Imgs/silde3.jpg'
import slide4 from '../Imgs/silde4.jpg'
import slide5 from '../Imgs/silde5.jpg'
import slide6 from '../Imgs/silde6.jpg'
import slide7 from '../Imgs/silde7.jpg'
import slide8 from '../Imgs/silde8.jpg'
import slide9 from '../Imgs/silde9.jpg'
import slide10 from '../Imgs/silde10.jpg'
import slide11 from '../Imgs/silde11.jpg'
import slide12 from '../Imgs/silde12.jpg'
import slide13 from '../Imgs/silde13.jpg'
import slide14 from '../Imgs/silde14.jpg'
import slide15 from '../Imgs/silde15.jpg'
import slide16 from '../Imgs/silde16.jpg'
import slide17 from '../Imgs/silde17.jpg'
import slide18 from '../Imgs/silde18.jpg'
import slide19 from '../Imgs/silde19.jpg'
import slide20 from '../Imgs/silde20.jpg'
import './bestselling.css'

import 'swiper/css/scrollbar';

const BestSelling = () => {
    return (
        <div className='my-32'>
            <div className='mx-40 mb-8'>
                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                <h1 className='text-[26px] font-bold uppercase' style={{ letterSpacing: "1px" }}>Best Selling Digital Comics</h1>
                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
            </div>
            <Swiper
                modules={[Navigation, Scrollbar]}
                loop={true}
                navigation={true}
            >
                <SwiperSlide>
                    <div className='grid grid-cols-5 gap-x-6 mx-40 my-5'>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/47001/age_of_ultron_2013_1" target={"_blank"} rel="noreferrer">
                                <img src={slide1} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Age of Ultron #1</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Bendis,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Hitch</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/8797/giant-size_x-men_1975_1" target={"_blank"} rel="noreferrer">
                                <img src={slide2} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Giant-Size X-Men #1</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Wein,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Cockrum</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/52450/secret_wars_2015_2" target={"_blank"} rel="noreferrer">
                                <img src={slide3} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Secret Wars #2</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Hickman,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Ross</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/32686/avengers_origins_vision_2013_1" target={"_blank"} rel="noreferrer">
                                <img src={slide4} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers Origins: Vision #1</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Higgins,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Perger</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/collection/28881/hawkeye_mockingbird_ghosts_trade_paperback" target={"_blank"} rel="noreferrer">
                                <img src={slide5} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Hawkeye & Mockingbird: Ghosts (Trade Paperback)</h1>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-5 gap-x-6 mx-40'>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/7186/avengers_1963_31" target={"_blank"} rel="noreferrer">
                                <img src={slide6} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers #31 </h1>
                            </a>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/52451/secret_wars_2015_3" target={"_blank"} rel="noreferrer">
                                <img src={slide7} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Secret Wars #3</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Hickman,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Ross</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/41188/avengers_vs_x-men_2012_1" target={"_blank"} rel="noreferrer">
                                <img src={slide8} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers Vs. X-Men #1</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Bendis,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Romita</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/46462/superior_spider-man_2013_1" target={"_blank"} rel="noreferrer">
                                <img src={slide9} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Superior Spider-Man #1</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Slott,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Stegman</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/20999/hulk_2008_4" target={"_blank"} rel="noreferrer">
                                <img src={slide10} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Hulk #4</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Loeb,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Mccguinness</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-5 gap-x-6 mx-40'>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/52452/secret_wars_2015_4" target={"_blank"} rel="noreferrer">
                                <img src={slide11} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Secret Wars #4</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Hickman,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Ross</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/41191/avengers_vs_x-men_2012_2" target={"_blank"} rel="noreferrer">
                                <img src={slide12} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers Vs. X-Men #2</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Aaron</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/43537/avengers_2012_7" target={"_blank"} rel="noreferrer">
                                <img src={slide13} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers #7</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Hickman,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Weaver</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/20860/ghost_rider_2006_21" target={"_blank"} rel="noreferrer">
                                <img src={slide14} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Ghost Rider #21</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Aaron,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Djurdjevic</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/52454/secret_wars_2015_6" target={"_blank"} rel="noreferrer">
                                <img src={slide15} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Secret Wars #6</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Hickman,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Ross</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='grid grid-cols-5 gap-x-6 mx-40'>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/41277/avengers_vs_x-men_2012_9" target={"_blank"} rel="noreferrer">
                                <img src={slide16} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Avengers Vs. X-Men #9</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Aaron,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Cheung</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/26597/the_marvels_project_2009_2" target={"_blank"} rel="noreferrer">
                                <img src={slide17} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>The Marvels Project #2</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Brubaker,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Epting</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/41219/hulk_smash_avengers_2011_1" target={"_blank"} rel="noreferrer">
                                <img src={slide18} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Hulk Smash Avengers (2011) #1</h1>
                            </a>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/47003/age_of_ultron_2013_2" target={"_blank"} rel="noreferrer">
                                <img src={slide19} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Age of Ultron #2</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Bendis</span>
                        </div>
                        <div className='comics'>
                            <a href="https://www.marvel.com/comics/issue/26598/the_marvels_project_2009_3" target={"_blank"} rel="noreferrer">
                                <img src={slide20} alt="" />
                                <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>The Marvels Project #3</h1>
                            </a>
                            <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Brubaker,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Epting</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BestSelling;