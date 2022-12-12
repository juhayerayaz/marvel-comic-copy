import React from 'react';
import './UpdateSec.css'
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
        </div>
    );
};

export default UpdateSec;