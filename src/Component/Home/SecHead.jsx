import React from 'react'

const SecHead = ({title, heading}) => {
    return (
        <div>
            <div className='flex gap-4 items-center mb-6'>
                <span className='w-5 h-10 bg-primary rounded-sm'></span>
                <h4 className='semi-bold text-primary'>{title}</h4>

            </div>
            <h2 className='text-[36px] semi-bold font-Inter leading-12 tracking-[4%]'>{heading}</h2>
        </div>
    )
}

export default SecHead;