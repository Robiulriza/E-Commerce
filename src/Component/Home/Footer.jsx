import React from 'react'
import { VscSend } from "react-icons/vsc";
import Container from '../Common/Container';
import Code from '../../assets/Code.png'
import Apple from '../../assets/Apple.png'
import Google from '../../assets/Google.png'



const Footer = () => {
    return (
        
        <div className="bg-black text-white">
            <Container>
                <div className=''>
                <div className='flex justify-between'>
                    <div className='pt-20'>

                    <h1 className='text-[24px] leading-6 tracking-[3%] font-Inter font-bold'>Exclusive</h1>
                    <h2 className='pt-6 text-[20px] font-medium leading-7'>Subscribe</h2>
                    <p className='pt-6 leading-6'>Get 10% off your first order</p>
                    <div className="relative border border-white w-54.25 h-12 mt-4">
                        <input className="text-[#FAFAFA] w-full h-full Leading-6 px-3 pl-4 pr-17.75 cursor-pointer "
                            type="email" placeholder="Enter your email" />
                        <VscSend className="absolute text-2xl top-3 left-44.5 cursor-pointer" />
                    </div>
                    </div>
                    <div className='pt-20'>
                       <h2 className='text-[20px] font-medium leading-7'>Support</h2>
                       <p className='pt-6 leading-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                       <p className='pt-4 leading-6'>exclusive@gmail.com</p>
                       <p className='pt-4 leading-6'>+88015-88888-9999</p>
                    </div>
                    <div className='pt-20'>
                       <h2 className='text-[20px] font-medium leading-7'>Account</h2>
                       <p className='pt-6 leading-6'>My Account</p>
                       <p className='pt-4 leading-6'>Login / Register</p>
                       <p className='pt-4 leading-6'>Cart</p>
                       <p className='pt-4 leading-6'>Wishlist</p>
                       <p className='pt-4 leading-6'>Shop</p>
                    </div>
                    <div className='pt-20'>
                       <h2 className='text-[20px] font-medium leading-7'>Quick Link</h2>
                       <p className='pt-6 leading-6'>Privacy Policy</p>
                       <p className='pt-4 leading-6'>Terms Of Use</p>
                       <p className='pt-4 leading-6'>FAQ</p>
                       <p className='pt-4 leading-6'>Contact</p>
                    </div>
                    <div className='pt-20'>
                       <h2 className='text-[20px] font-medium leading-7'>Download App</h2>
                       <p className='pt-6 text-[12px] text-[#AFAFAF] font-medium leading-4.5'>Save $3 with App New User Only</p>
                       <div className='mt-2.5'>
                        <div className='flex items-center gap-2'>
                            <img src={Code} alt="" />
                        <div className='space-y-2 cursor-pointer'>
                            <img src={Google} alt="" />
                            <img src={Apple} alt="" />

                        </div>

                        </div>
                       </div>
                    </div>
                </div>

                </div>
                <p className='text-[#3D3D3D] Leading-24 pt-19 pb-6 text-center'>&copy; Copyright Rimel 2022. All right reserved </p>
                </Container>

        </div>

        
    )
}

export default Footer
