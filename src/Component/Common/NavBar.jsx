import React, { useState } from "react";
import Container from "./Container";
import logo from "../../assets/Logo.png";
import { CiHeart } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaOpencart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-white py-8.5 border-b">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex items-center gap-12">
            <li className="cursor-pointer"> Home </li>
            <li className="cursor-pointer"> Contact</li>
            <li className="cursor-pointer"> About</li>
            <li className="cursor-pointer"> Sign Up</li>
          </ul>
          <div className=" flex gap-6 items-center">
            <div className="relative w-60.75">
              <input className="text-xs bg-[#f5f5f5] w-full py-2.5 pl-5 pr-17.5 cursor-pointer "
                type="search" placeholder="What are you looking for?"/>
                <HiMiniMagnifyingGlass className="absolute text-2xl top-1.75 right-3 cursor-pointer" />
            </div>
            <div className="flex gap-4 text-3xl">
              <CiHeart className="cursor-pointer"/>
              <FaOpencart className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
