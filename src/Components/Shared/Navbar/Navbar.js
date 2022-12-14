import React from 'react';
import { BsSearch } from 'react-icons/bs'
import logo from '../../Imgs/marvel-logo.png'
import threelogo from '../../Imgs/three-logo.png'
import { useForm } from 'react-hook-form';


const Navbar = () => {
    const joinModal = "join-modal"
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <div className='bg-[#202020]'>
            <div className='flex items-center justify-center border border-[#393939] border-x-0 border-t-0 h-[52px]'>
                <div className='flex items-center border border-[#393939] p-3 border-y-0 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill='white' viewBox="0 0 65.6 66.7"><path fill-rule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path></svg>
                    <label htmlFor="login-modal" className="mx-2 text-xs font-semibold cursor-pointer uppercase" style={{ letterSpacing: '1px' }}>Sign in</label>
                    |
                    <input type="checkbox" id="login-modal" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle bg-black bg-opacity-90">
                        <div className="card w-[409px] bg-white px-10 py-9 rounded-none">
                            <label htmlFor="login-modal" className="text-black text-xl p-3 font-bold cursor-pointer hover:text-stone-500 bg-transparent absolute right-2 top-2">✕</label>
                            <div>
                                <img className='h-[56px] w-[200px] mx-auto mb-5 mt-7' src={threelogo} alt="" />
                                <h1 className='text-red-600 uppercase text-lg text-center'>Sign In</h1>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 py-6">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Username or Email Address"
                                            className="w-full text-black py-3 px-6 ring-1 ring-gray-300 rounded placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                            className="w-full text-black py-3 px-6 ring-1 ring-gray-300 rounded placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    <input className='w-full px-6 py-3 my-4 rounded-none bg-red-600 btn hover:bg-red-800' type="submit" value="Login" />
                                </form>
                                <label className='text-black border-2 font-semibold border-black px-[104px] p-3 cursor-pointer' htmlFor={joinModal}>Create an Account</label>
                            </div>
                        </div>
                    </div>
                    <label htmlFor={joinModal} className="mx-2 text-xs font-semibold cursor-pointer uppercase" style={{ letterSpacing: '1px' }}>JOIN</label>
                    <input type="checkbox" id={joinModal} className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-black">Congratulations Join Internet user!</h3>
                            <p className="py-4 text-black">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                                <label htmlFor={joinModal} className="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-[22rem]'>
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