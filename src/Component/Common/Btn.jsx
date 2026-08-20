import React from 'react'

const Btn = ({children, className}) => {
  return (
    <button className={`px-12 py-4 bg-primary font-semibold text-white rounded-sm cursor-pointer ${className}`}>
        {children}
    </button>
  )
}

export default Btn
