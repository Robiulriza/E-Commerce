import React from 'react';
import { Rate } from 'antd';
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";



const Card = ({img, discount, product, disprice, currentprice, rating, review, discounthidden, flexing }) => {
  return (
    <div>
    <div className='w-67.5 group h-87.5'>
        <div className='relative'>
      <div className='h-62.5 relative overflow-hidden'>
        <img src={img} alt='' />
        <span className={`py-1 px-3 bg-primary rounded-sm text-white text-xs absolute top-3 left-3 ${discounthidden}`}>{discount}</span>
        <div className='absolute top-3 right-3'>
          <div className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center'>
            <FiHeart className='text-2xl cursor-pointer'/>
          </div>
          <div className='w-8.5 h-8.5 bg-white rounded-full flex justify-center items-center'>
            <IoEyeOutline className='text-2xl cursor-pointer' />
          </div>
        </div>
        <h3 className={ 'w-full py-2 bg-black rounded-bl-sm rounded-br-sm rounded-tr-xs rounded-tl-xs  absolute left-0 bottom-0 translate-y-full cursor-pointer duration-500 ease-in group-hover:translate-y-0  text-center text-white' }>
            Add To Cart
          </h3>
      </div>

        </div>

      <h3 className='font-medium mt-4 mb-2'>{product}</h3>
      <div className={`${flexing}`}>
      <div className='flex gap-4 items-center'>
        <h3 className='font-medium text-primary'>{disprice}</h3>
        <h3 className='font-medium text-gray-400 line-through'>{currentprice}</h3>
      </div>

      <div className='flex gap-4'>
        <Rate allowHalf defaultValue={rating} />
        <h4 className='font-medium text-gray-400'>{review}</h4>
      </div>
    </div>

      </div>


    </div>
    
  );
};

export default Card;
