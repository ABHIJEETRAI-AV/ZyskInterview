import React from 'react'
import test from './zysk icon folder/Testimonial.png'
import text from './zysk icon folder/Testimonial (1).png'
import profile from './zysk icon folder/Olivia.svg'
// import candice from './zysk icon folder/Candice.png'

function Testimonial() {
  return (
    <div className=' w-full flex flex-col items-center justify-center h-[552px] bg-[#F7F9FC]'>
      <div className=' flex flex-col items-center justify-center w-[1280px] h-[360px] '> 
      <div className='flex flex-col items-center justify-between w-[1216px] h-[360px] '> 
        <div className='flex flex-row justify-between items-center gap-2 '>
            <img src={test} alt="" />
            <img src={text} alt="" />
        </div>
        <div><p className='text-[48px] font-[500] text-center'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p></div>
        <div className='flex flex-col items-center justify-between '>
            <div className='w-[64px] h-[64px] rounded-[50%] '><img src={profile} alt="" /></div>
            <div className='flex flex-col items-center text-center'>
                <p className='text-[18px] font-[600]'>Candice Wu</p>
                <p className='text-[16px] font-[400]'>Product Manager, Sisyphus</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
