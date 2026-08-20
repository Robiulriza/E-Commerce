import React, { Component } from "react";
import Container from "../Common/Container";
import { IoIosArrowForward } from "react-icons/io";
import banner from "../../assets/Carosel.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="absolute bottom-3 ">
        <ul style={{ margin: "0px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className=" w-3 h-3 rounded-full bg-[#7f7f7f] "> </div>
    ),
  };

  return (
    <div className=" bg-white">
      <Container>
        <div className=" flex  ">
          <div className=" w-[20%] border-r border-[#00000031] ">
            <ul className=" text-black space-y-4 mt-10">
              <li className="flex w-full justify-between pr-2 items-center cursor-pointer">
                <span>Woman’s Fashion</span> <IoIosArrowForward />
              </li>
              <li className="cursor-pointer"> Men’s Fashion</li>
              <li className="cursor-pointer"> Electronics</li>
              <li className="cursor-pointer"> Home & Lifestyle</li>
              <li className="cursor-pointer"> Medicine</li>
              <li className="cursor-pointer"> Sports & Outdoor</li>
              <li className="cursor-pointer"> Health & Beauty</li>
              <li className="cursor-pointer"> Groceries & </li>
            </ul>
          </div>
          <div className=" w-[80%] ml-13.5 mt-10 ">
            <Slider.default  {...settings}>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
              <div>
                <img className="w-full  " src={banner} alt="" />
              </div>
            </Slider.default>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;