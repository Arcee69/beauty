import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


import MobileNavBar from './MobileNavBar'


const MiniHeader = () => {
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()

  const handleToggle = () => {
    setOpen(!open)
  }
   

  return (
    <div className='w-full fixed z-30'>
        <div className='w-[100%] h-[70px] bg-primary py-[16px] px-[20px] flex justify-between items-center'>
            <img src="https://res.cloudinary.com/code-idea/image/upload/v1743288173/logo_2_ywzt2g.png"  alt='logo' className='w-[194.44px] h-[40px]' onClick={() => navigate("/")}/>
            <FaBars className='w-[24px] h-[24px] cursor-pointer text-white' onClick={handleToggle} />
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader