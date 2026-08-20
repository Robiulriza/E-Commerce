import React from 'react'
import SecHead from './SecHead'
import Container from '../Common/Container'
import Countdown from '../Common/Countdown'
import Card from '../Common/Card'
import Console from '../../assets/console.png';
import Chair from '../../assets/chair.png'
import Keyboard from '../../assets/keyBoard.png'
import Tv from '../../assets/tv.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import Btn from '../Common/Btn'


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



const FlashSales = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
        <div className='mt-38.5 '>
            <Container className='border-b border-[#00000031]'>
                <div className="flex items-end gap-22">
                    <SecHead
                    title="Today’s"
                    heading="Flash Sales"
                    />
                    <Countdown />
                </div>
                <div className='mt-10'>
                    <Slider.default {...settings} className="w-full">
                        <div>
                            <Card
                                img={Console}
                                discount="-40%"
                                product="HAVIT HV-G92 Gamepad"
                                disprice="$120"
                                currentprice="$160"
                                rating="5"
                                review="88"
                            />
                            </div>
                            <div>
                            <Card
                                img={Keyboard}
                                discount="-35%"
                                product="AK-900 Wired Keyboard"
                                disprice="$960"
                                currentprice="$1160"
                                rating="4"
                                review="75"
                            />

                            </div>
                            <div>

                            <Card
                                img={Tv}
                                discount="-30%"
                                product="IPS LCD Gaming Monitor"
                                disprice="$370"
                                currentprice="$400"
                                rating="5"
                                review="99"
                            />
                            </div>
                            <div>
                            <Card
                                img={Chair}
                                discount="-25%"
                                product="S-Series Comfort Chair"
                                disprice="$375"
                                currentprice="$400"
                                rating="4.5"
                                review="99"
                            />

                        </div>
                        <div>
                            <Card
                                img={Console}
                                discount="-40%"
                                product="HAVIT HV-G92 Gamepad"
                                disprice="$120"
                                currentprice="$160"
                                rating="5"
                                review="88"
                            />
                            </div>
                            <div>
                            <Card
                                img={Keyboard}
                                discount="-35%"
                                product="AK-900 Wired Keyboard"
                                disprice="$960"
                                currentprice="$1160"
                                rating="4"
                                review="75"
                            />

                            </div>
                            <div>

                            <Card
                                img={Tv}
                                discount="-30%"
                                product="IPS LCD Gaming Monitor"
                                disprice="$370"
                                currentprice="$400"
                                rating="5"
                                review="99"
                            />
                            </div>
                            <div>
                            <Card
                                img={Chair}
                                discount="-25%"
                                product="S-Series Comfort Chair"
                                disprice="$375"
                                currentprice="$400"
                                rating="4.5"
                                review="99"
                            />

                        </div>
                    </Slider.default>
                </div>
                <Btn className="block mx-auto mt-10 hover:bg-[#ff0000] mb-14.25">View All Products</Btn>
            </Container>
        </div>

    )
}

export default FlashSales
