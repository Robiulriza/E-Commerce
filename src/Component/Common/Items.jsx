import React from 'react'

const Items = ({img, title, heading, className, spacing, gaping}) => {
  return (
    <>
    <div className='rounded-sm'>
      <img src={img} alt="" />
    </div>
    <div className={`w-60.5 absolute top-111.5 left-8 text-white ${className}`}>
        <h2 className={`text-[24px] leading-6 font-semibold font-Inter mb-4 ${spacing}`}>{title}</h2>
        <p className={`mb-4 leading-5.25 text-[14px] ${gaping}`}>{heading}</p>
    <button className='underline leading-6 font-medium cursor-pointer'>
        Shop Now
    </button>
    </div>
    
    </>
    
  )
}

export default Items