import React from 'react'

const Accessories = ({children, title}) => {
  return (
    <>
    <div className='group w-42.5 h-36'>
        <div className='border group-hover:border-0 cursor-pointer group-hover:bg-primary w-full h-full border-[#000000ea] text-center flex justify-center items-center flex-col'>
            <div className='text-[50px] group-hover:text-white'>{children}</div>
            <h5 className='group-hover:text-white mt-4'>{title}</h5>
        </div>

    </div>
    </>
  )
}

export default Accessories;
