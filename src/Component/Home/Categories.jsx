import React from 'react'
import SecHead from './SecHead'
import Container from '../Common/Container'
import Accessories from '../Common/Accessories'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { SlScreenSmartphone } from "react-icons/sl";
import { FiMonitor } from "react-icons/fi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { TbDeviceGamepad } from "react-icons/tb";




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute -top-20 right-6.25 w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center'

            onClick={onClick}>
            <FaArrowRight className='text-2xl text-black' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute -top-20 right-20 w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center'
            onClick={onClick}>
            <FaArrowLeft className='text-2xl text-black' />

        </div>
    );
}




const Categories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='mt-36.75'>
            <Container>
                <SecHead
                    title="Categories"
                    heading="Browse By Category"
                />
                <div className='mt-10 flex justify-between gap-7.5'>
                    <Slider.default {...settings} className="w-full">
                        <div>
                            <Accessories
                                title="Phones"
                            >
                                <SlScreenSmartphone />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="Monitor"
                            >
                                <FiMonitor />

                            </Accessories>
                            </div>
                            <div>
                            <Accessories
                                title="SmartWatch"
                            >
                                <BsSmartwatch />
                            </Accessories>

                            </div>
                            <div>

                            <Accessories
                                title="Camera"
                            >
                                <IoCameraOutline />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="HeadPhones"
                            >
                                <FaHeadphonesSimple />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="Gaming"
                            >
                                <TbDeviceGamepad />

                            </Accessories>
                            </div>
                        <div>
                            <Accessories
                                title="Phones"
                            >
                                <SlScreenSmartphone />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="Monitor"
                            >
                                <FiMonitor />

                            </Accessories>
                            </div>
                            <div>
                            <Accessories
                                title="SmartWatch"
                            >
                                <BsSmartwatch />
                            </Accessories>

                            </div>
                            <div>

                            <Accessories
                                title="Camera"
                            >
                                <IoCameraOutline />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="HeadPhones"
                            >
                                <FaHeadphonesSimple />
                            </Accessories>
                            </div>
                            <div>

                            <Accessories
                                title="Gaming"
                            >
                                <TbDeviceGamepad />

                            </Accessories>
                            </div>
                            

                    </Slider.default>


                </div>

            </Container>
        </div>
    )
}

export default Categories
