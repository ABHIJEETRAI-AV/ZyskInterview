import React from 'react'
import section2img from './section2.png'
import demo from './zysk icon folder/play.svg'
import arrow from './zysk icon folder/arrow-right.svg'

function section1() {
  return (
    <div className=' flex flex-col   h-80 w-[1216px]  justify-between items-center '>
      <div className='flex flex-col items-center justify-between gap-[24px]'>
        <div className="flex flex-row items-center justify-between gap-[12px] border-2 border-[#E63F6A] border-opacity-30 h-[32px] w-[355px] rounded-[16px] pr-[10px] pl-[4px] bg-[#E63F6A] bg-opacity-5 ">
          <div className='flex flex-row items-center justify-center h-[24px] w-[102px] rounded-[16px] border-2 border-[#E63F6A] border-opacity-50 text-[0.8em] text-[#E63F6A] font-[500] bg-[#FFFFFF]'><p>New feature</p></div>
          <div>
            <p className='flex flex-row items-center justify-center gap-1 text-[0.8em] text-[#E63F6A]'>Check out the team dashboard <img src={arrow} alt="" /></p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[1.1em]">
          <div className="text-[3em] font-[700]"><h1>Beautiful analytics to grow smarter</h1></div>
          <div className="text-[1.3em] w-[40em] font-[300] text-center">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between gap-[12px]'>
        <button className='flex flex-row items-center justify-center gap-1 w-[114px] h-[48px] bg-white text-black border-2 border-[#D0D5DD] shadow-[0_1px_2px_0px_#1018280D] rounded-[108px] text-[1em]'><img src={demo} alt="" /> Demo</button>
        <button className='w-[114px] h-[48px] bg-red-500 text-white rounded-[108px] text-[1em] hover:bg-sky-600'>Sign up</button>
      </div>
    </div>
  )
}

export default section1



export function Section2() {
  return (
    <div className='h-[40rem] w-[1216px] border-x-6 border-t-6 border-black '>
      <img src={section2img} alt="" className='h-[40rem] w-[100%] rounded-[10px]' />
    </div>
  )
}



