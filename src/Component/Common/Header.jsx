import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className=" py-3 bg-black text-white">
      <Container>
        <div className=" flex justify-between items-center text-sm ">
            <div></div>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className=" underline pl-2 font-semibold cursor-pointer" >ShopNow</span>
          </p>
          <div>
            <select className="text-sm bg-black cursor-pointer" name="" id="">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Chinese</option>
              <option value="">Korean</option>
              <option value="">Hindi</option>
            </select>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
