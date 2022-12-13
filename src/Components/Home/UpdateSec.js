import React from 'react';
import './UpdateSec.css'
import release1 from '../Imgs/release1.jpg'
import release2 from '../Imgs/release2.jpg'
import release3 from '../Imgs/release3.jpg'
import release4 from '../Imgs/release4.jpg'
import release5 from '../Imgs/release5.jpg'
import release6 from '../Imgs/release6.jpg'
import release7 from '../Imgs/release7.jpg'
import release8 from '../Imgs/release8.jpg'
import release9 from '../Imgs/release9.jpg'
import release10 from '../Imgs/release10.jpg'
import release11 from '../Imgs/release11.jpg'
import release12 from '../Imgs/release12.jpg'

const UpdateSec = () => {
    const nameOfMonth = new Date().toLocaleString(
        'default', { month: 'long' }
    );
    const date = new Date().getDate();
    return (
        <div className='mx-40 mt-2 mb-12'>
            <div className='mb-8'>
                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972] ml-16'></div>
                <h1 className='text-[26px] font-bold uppercase' style={{ letterSpacing: "1px" }}>{nameOfMonth} {date} : new releases</h1>
                <div className='divider-horizontal rotate-45 w-[2px] h-5 bg-[#c6a972]'></div>
            </div>
            <a href="https://www.marvel.com/insider?cid=dcom_promomodule_20200601_insider_comicspage">
                <div class="active-dark noTitle promo-strip">
                    <div class="promo-strip__container">
                        <div class="promo-strip__image insider"></div>
                        <div class="promo-strip__title">
                            <h6>.</h6>
                        </div>
                        <div class="promo-strip__copy">
                            <p className='font-bold text-lg'>
                                Earn 500 points for making a purchase on the Marvel Comics app!
                            </p>
                        </div>
                        <div class="promo-strip__join">
                            <span className='text-lg font-bold text-red-600'>
                                Join Now
                            </span>
                        </div>
                    </div>
                    <p class="text-slate-600 text-center">Restrictions Apply.</p>
                </div>
            </a>
            <div className='grid grid-cols-5 gap-x-5 gap-y-10'>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/105922/origins_of_marvel_comics_marvel_tales_1_2022_1">
                        <img src={release1} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>ORIGINS OF MARVEL COMICS: MARVEL TALES 1 #1</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Macchio,</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'> Bradshaw</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/105911/ultimate_comics_spider-man_1_facsimile_edition_2022_1">
                        <img src={release2} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>ULTIMATE COMICS SPIDER-MAN 1 FACSIMILE EDITION #1</h1>
                    </a>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/104563/dark_web_x-men_2022_1">
                        <img src={release3} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Dark Web: X-Men #1</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Duggen, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Reis</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/103049/star_wars_bounty_hunters_2020_29">
                        <img src={release4} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Star Wars: Bounty Hunters #29</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Sacks, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Villanelli</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/102525/legion_of_x_2022_8">
                        <img src={release5} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Legion of X #8</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Spurrier</span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Diaz</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/102183/the_amazing_spider-man_2022_15">
                        <img src={release6} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>The Amazing Spider-Man #15</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Wells, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Mccguinness</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/101542/monica_rambeau_photon_2022_1">
                        <img src={release7} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Monica Rambeau: Photon #1</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Ewing, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Maria</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/101529/iron_man_2022_1">
                        <img src={release8} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Iron Man #1</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Duggen, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Figeri</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/98804/savage_avengers_2022_8">
                        <img src={release9} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Savage Avengers #8</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Pepose, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Magno</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/98449/planet_hulk_worldbreaker_2022_2">
                        <img src={release10} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Planet Hulk: Worldbreaker #2</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Pak, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Garcia</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/93029/deadpool_2022_2">
                        <img src={release11} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Deadpool #2</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Wong, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Coccolo</span>
                </div>
                <div className='comics'>
                    <a href="https://www.marvel.com/comics/issue/91347/star_wars_the_mandalorian_2022_6">
                        <img src={release12} alt="" />
                        <h1 className='text-[14px] font-extrabold mt-8' style={{ letterSpacing: '.6px' }}>Star Wars: The Mandalorian #6</h1>
                    </a>
                    <span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Barnes, </span><span className='text-xs font-medium cursor-pointer hover:text-orange-600'>Jeanty</span>
                </div>
            </div>
        </div>
    );
};

export default UpdateSec;