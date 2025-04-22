import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";




const Header = () => {

  const navigate = useNavigate()



  return (
    <header className='bg-primary fixed z-50 w-full  flex  h-[70px]'>
      <div className='flex items-center justify-between w-[80%] mx-auto px-5 py-0'>
        <img 
          src="https://res.cloudinary.com/code-idea/image/upload/v1743288173/logo_2_ywzt2g.png" 
          alt="Pretty On Repeat Logo" 
          className='w-auto h-[44px] cursor-pointer' 
          onClick={() => {navigate("/"); window.scrollTo(0, 0)}}
        />
        <div className='flex items-center gap-5'>
          <p className='font-mont text-base tracking-[1px] cursor-pointer hover:text-[#3A3238] uppercase font-medium text-white'><a href='#home'>Home</a></p>
          <p className='font-mont text-base tracking-[1px] cursor-pointer hover:text-[#3A3238] uppercase font-medium text-white'><a href='#about'>About</a></p>
          <p className='font-mont text-base tracking-[1px] cursor-pointer hover:text-[#3A3238] uppercase font-medium text-white'><a href='#services'>Services</a></p>
          <p className='font-mont text-base tracking-[1px] cursor-pointer hover:text-[#3A3238] uppercase font-medium text-white'><a href='#membership'>Membership</a></p>
          <p className='font-mont text-base tracking-[1px] cursor-pointer hover:text-[#3A3238] uppercase font-medium text-white'><a href='#contact'>Contact</a></p>
        </div>
      </div>
         
    </header>
  )
}

export default Header