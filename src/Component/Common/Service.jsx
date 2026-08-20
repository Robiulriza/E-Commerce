import React from 'react'


const Service = ({img, title, heading }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
    <img src={img} alt="" />

        </div>
    <div className='text-center mt-6'>
        <h1 className='text-[20px] font-semibold'>{title}</h1>
        <p className='mt-2 text-[14px] leading-5.25'>{heading}</p>
    </div>
    </div>
  )
}

export default Service
