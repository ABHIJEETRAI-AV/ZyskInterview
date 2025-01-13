import React from 'react'
import logo from  './logo.png'
import profile from './zysk icon folder/Olivia.svg'
import dropdown from './zysk icon folder/dropdown.svg'
import Dropdown from './dropdown'
import { useState } from 'react';
function header() {
  return (
    <div className='w-full'>
       
      <Menu />
    </div>
  )
}

function Menu() {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
      setIsActive(!isActive);
  };
  const [isActive1, setIsActive1] = useState(false);
  
  const handleToggle1 = () => {
      setIsActive1(!isActive1);
  };
  return (
    
    <div>
      <div className={` ${isActive ? 'fixed' : 'hidden'}  top-[4em] left-[6em]`}>
    <Dropdown/>
    </div>
    <div className={` ${isActive1 ? 'fixed' : 'hidden'}  top-[4em] left-[10em]`}>
    <Dropdown/>
    </div>
      <nav className=' h-20 w-full flex flex-row items-center justify-center border-b-2 border-[#E5E5E5]'>
        <div className=' flex flex-row items-center justify-between w-[1280px] h-[40px] px-[32px]'>
          <div className='flex flex-row items-center justify-between  w-[528px] h-[32px] '>
            <div ><a href=""><img src={logo} alt="" className="h-[1.5em] w-[5em]"/></a></div>
            <ul className='text-black font-[600] text-decoration-line: none flex gap-[32px]'>
              <li><a href="">Home</a></li>
              <li><div className='flex flex-row items justify-between gap-[8px]' onClick={handleToggle}><a href="">Products</a><img src={dropdown} alt="" /></div></li>
              <li><div className='flex flex-row items justify-between gap-[8px] ' onClick={handleToggle1}><a href="">Resources</a><img src={dropdown} alt="" /></div></li>
              <li><a href="">Pricing</a></li>
            </ul>
          </div>
          <div className="profile"><img src={profile} alt="" /></div>
        </div>
      </nav>
    </div>
  )
}

export default header
