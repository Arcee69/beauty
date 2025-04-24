import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Footer = () => {

  const navigate = useNavigate()



  return (
    <div className="w-full bg-[#ff2d6fe3] pt-[40px]  px-0 pb-[15px] flex flex-col items-center justify-center">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center gap-[25px]">
        <img 
          src="https://res.cloudinary.com/code-idea/image/upload/v1743288173/logo_2_ywzt2g.png" 
          alt="Pretty On Repeat Logo" 
          className='w-[170px] h-[35px] cursor-pointer' 
          onClick={() => {navigate("/"); window.scrollTo(0, 0)}}
        />
        <div className="flex flex-wrap justify-center items-center gap-5">
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">Home</p>
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">About</p>
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">Services</p>
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">Membership</p>
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">Contact</p>
          <p className="uppercase text-[13px] tracking-[1px] text-white font-semibold font-mont cursor-pointer">Privacy Policy</p>
        </div>
        <div className="border pt-[15px] border-b-0 border-x-0 w-full border-[#ffffff80]">
          <p className="text-[13px] tracking-[1px] text-white text-center lg:font-semibold font-mont">© 2025 Pretty On Repeat. All rights reserved. Make Beauty A Lifestyle.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
