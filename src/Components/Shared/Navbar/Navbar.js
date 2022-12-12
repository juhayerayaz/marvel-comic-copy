import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import logo from '../../Imgs/marvel-logo.png'

const Navbar = () => {
    return (
        <div className='bg-[#202020]'>
            <div className='flex items-center justify-center border border-[#393939] border-x-0 border-t-0 h-[52px]'>
                <div className='flex items-center border border-[#393939] p-3 border-y-0 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill='white' viewBox="0 0 65.6 66.7"><path fill-rule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path></svg>
                    <Link className='mx-2 text-xs font-semibold cursor-pointer' style={{ letterSpacing: '1px' }}>SIGN IN</Link>
                    |
                    <Link className='ml-2 text-xs font-semibold' style={{ letterSpacing: '1px' }}>JOIN</Link>
                </div>
                <div className='px-80'>
                    <img className='h-[52px]' src={logo} alt="" />
                </div>
                <div className='flex items-center text-white'>
                    <div className='flex items-center border border-[#393939] p-2 border-y-0'>
                        <img src="https://i.annihil.us/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png" className='w-[20xp] h-[28px]' alt="" />
                        <h3 className='text-center mx-3 text-xs font-semibold uppercase' style={{ letterSpacing: '1px' }}>Marvel Unlimited <br /> <span className='font-normal text-xs' style={{ letterSpacing: '1px' }}>Subscribe</span></h3>
                    </div>
                    <div className='border border-[#393939] border-solid p-4 border-l-0 border-y-0 font-bold cursor-pointer'>
                        <BsSearch />
                    </div>
                </div>
            </div>
            <div className='flex items-center text-white justify-center h-10 gap-x-5 mr-24'>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>News</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>Comics</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>Character</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>Movies</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>TV Shows</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>Games</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>Videos</p>
                <p className='text-sm uppercase font-semibold cursor-pointer' style={{ letterSpacing: '2px' }}>More</p>
            </div>
        </div>
    );
};

export default Navbar;