import React from 'react'
import SecHead from './SecHead'
import Container from '../Common/Container'
import Countdown from '../Common/Countdown'
import Card from '../Common/Card'
import Food from '../../assets/CatFood.png';
import Camera from '../../assets/Camera.png'
import Laptop from '../../assets/Laptop.png'
import Product from '../../assets/Product.png'
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



const OurProduct = () => {
    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='mt-38.5 '>
            <Container className=''>
                <div className="flex items-end gap-22">
                    <SecHead
                        title="Our Products"
                        heading="Explore Our Products"
                    />
                </div>
                <div className='mt-10'>
                    <Slider.default {...settings} className="w-full">
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>
                            <Card
                                img={Food}
                                discounthidden="hidden"
                                product="Breed Dry Dog Food"
                                disprice="$100"
                                flexing="flex items-center"
                                rating="3"
                                review="35"
                            />
                        </div>
                        <div>
                            <Card
                                img={Camera}
                                discounthidden="hidden"
                                product="CANON EOS DSLR Camera"
                                disprice="$360"
                                flexing="flex items-center"
                                rating="4"
                                review="95"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        <div>

                            <Card
                                img={Laptop}
                                discounthidden="hidden"
                                product="ASUS FHD Gaming Laptop"
                                disprice="$700"
                                flexing="flex items-center"
                                rating="5"
                                review="325"
                            />
                        </div>
                        <div>
                            <Card
                                img={Product}
                                discounthidden="hidden"
                                product="Curology Product Set "
                                disprice="$500"
                                flexing="flex items-center"
                                rating="4"
                                review="145"
                            />

                        </div>
                        
                    </Slider.default>
                </div>
                <Btn className="block mx-auto mt-10 hover:bg-[#ff0000] mb-14.25">View All Products</Btn>
            </Container>
        </div>

    )
}

export default OurProduct
