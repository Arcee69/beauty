import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useNavigate } from 'react-router-dom'


const MobileNavBar = ({ handleClose }) => {
    const [openProductDropdown, setOpenProductDropdown] = useState(false);
    const [openPersonalDropdown, setOpenPersonalDropdown] = useState(false);
    const [openSmeDropdown, setOpenSmeDropdown] = useState(false);
    const [openMediaDropdown, setOpenMediaDropdown] = useState(false);
    const [openPrivateDropdown, setOpenPrivateDropdown] = useState(false);
    const [openResourcesDropdown, setOpenResourcesDropdown] = useState(false);
    
    const navigate = useNavigate()

    const handleProduct = () => {
      setOpenProductDropdown(!openProductDropdown)
    }

    const handlePersonal = () => {
      setOpenPersonalDropdown(!openPersonalDropdown)
    }

    const handleSme = () => {
      setOpenSmeDropdown(!openSmeDropdown)
    }

    const handleMedia = () => {
      setOpenMediaDropdown(!openMediaDropdown)
    }

    const handlePrivate = () => {
      setOpenPrivateDropdown(!openPrivateDropdown)
    }

    const handleResources = () => {
      setOpenResourcesDropdown(!openResourcesDropdown)
    }



  return (
    <div 
      className="fixed top-14 bg-[#ff2d6fe3] w-[100%] left-0 h-[100vh]" 
      style={{zIndex: 9999}}
    >
      <div className='flex flex-col justify-center h-screen items-center gap-5'>
        <p onClick={handleClose} className='font-mont text-[18px] tracking-[1px] p-[15px] cursor-pointer uppercase font-medium text-white'><a href='#home'>Home</a></p>
        <p onClick={handleClose} className='font-mont text-[18px] tracking-[1px] p-[15px] cursor-pointer uppercase font-medium text-white'><a href='#about'>About</a></p>
        <p onClick={handleClose} className='font-mont text-[18px] tracking-[1px] p-[15px] cursor-pointer uppercase font-medium text-white'><a href='#services'>Services</a></p>
        <p onClick={handleClose} className='font-mont text-[18px] tracking-[1px] p-[15px] cursor-pointer uppercase font-medium text-white'><a href='#membership'>Membership</a></p>
        <p onClick={handleClose} className='font-mont text-[18px] tracking-[1px] p-[15px] cursor-pointer uppercase font-medium text-white'><a href='#contact'>Contact</a></p>
      </div>
    </div>
  )
}

export default MobileNavBar