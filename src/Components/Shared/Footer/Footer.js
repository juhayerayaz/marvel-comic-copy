import React from 'react';
import insider from '../../Imgs/insider-logo.png'
import marvelU from '../../Imgs/marvel-u.png'
import { BsPinterest, BsSnapchat } from 'react-icons/bs'
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { FaTwitter, FaTumblr } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'


const Footer = () => {
    return (
        <footer className='bg-[#151515] pt-20 pb-8'>
            <div className='mx-40'>
                <div className='flex flex-row items-center justify-between px-5 mb-20'>
                    <span>
                        <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg" className="w-[80px]">
                            <rect fill="#EC1D24" width="100%" height="100%"></rect>
                            <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
                        </svg>
                    </span>
                    <div>
                        <a href="https://www.marvel.com/corporate/about" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className='font-bold'>About Marvel</h1></a>
                        <a href="https://help.marvel.com/" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className='font-bold'>Helps/Faqs</h1></a>
                        <a href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className='font-bold'>Careers</h1></a>
                        <a href="https://www.marvel.com/corporate/interns" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className='font-bold'>Internships</h1></a>
                    </div>
                    <div className='mr-10'>
                        <a href="https://www.marvel.com/corporate/advertising" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className=''>Advertising</h1></a>
                        <a href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className=''>Disney+</h1></a>
                        <a href="https://www.marvelhq.com/" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className=''>Marvelhq.com</h1></a>
                        <a href="https://www.marvel.com/redeem" className='text-white hover:text-zinc-400' target={'_blank'} rel="noreferrer"><h1 className=''>Redeem Digital Comics</h1></a>
                    </div>
                    <div className='mx-10'>
                        <div className='flex items-center mb-5'>
                            <img src={insider} className="w-[60px] mr-10" alt="" />
                            <div>
                                <h1 className='text-white font-bold'>Marvel Insider</h1>
                                <p className='text-sm text-[#767676]'>Get Rewarded for being a marvel fan</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src={marvelU} className="w-[60px] mr-10" alt="" />
                            <div>
                                <h1 className='text-white font-bold'>Marvel Unlimited</h1>
                                <p className='text-sm text-[#767676]'>Access over 30,000+ Digital Comics</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-white mb-4'>Follow Marvel</h1>
                        <div className='text-[#767676] grid grid-cols-4 gap-5'>
                            <AiFillFacebook className='w-[28px] h-[28px] hover:text-white cursor-pointer' />
                            <FaTwitter className='w-[24px] h-[24px] hover:text-white cursor-pointer' />
                            <ImInstagram className='w-[22px] h-[22px] hover:text-white cursor-pointer' />
                            <FaTumblr className='w-[22px] h-[22px] hover:text-white cursor-pointer' />
                            <AiFillYoutube className='w-[28px] h-[28px] hover:text-white cursor-pointer' />
                            <BsSnapchat className='w-[22px] h-[22px] hover:text-white cursor-pointer' />
                            <BsPinterest className='w-[22px] h-[22px] hover:text-white cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-around px-10'>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Terms of use</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Privacy Policy</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Your California Rights</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Childrens Online Privacy Policy</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>License Agreement</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Interest Based Ads</p>
                    <p className='text-sm text-[#767676] hover:text-white cursor-pointer'>Marvel Insider Terms</p>
                    <p className='text-sm text-[#767676]'>&#169; 2022 MARVEL</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;