import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Buttons = ({ width, text }) => {
  return (
    <button
        type='button'
        style={{
            boxShadow: "0 5px 15px rgba(251, 111, 146, 0.3)"
        }}
        className={`rounded-[50px] w-[${width}] hover:translate-y-[-3px] gap-2 h-[55.19px] transition-all duration-300 ease-in p-5 inline-flex items-center justify-center bg-[linear-gradient(135deg,#FF8FAB_0%,#FF2D6F_100%)] tracking-[1px]`}
    >
        <p className='text-white font-semibold text-base font-mont uppercase'>{text}</p>
        <FaArrowRight className='text-[#fff] font-[900]' />
    </button>
  )
}

export default Buttons