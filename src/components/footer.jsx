import React from 'react'
import logo from './logo.png'
import SectionDivider from './SectionDivider'
function footer() {
  return (
    <div>
      <Section8 />

      <div className='w-full flex flex-col items-center justify-around h-[480px] '>
        <div className='w-[64em] flex flex-col items-center justify-center  '>
          <div className='w-[61em] flex flex-row items-center justify-between gap-[32px] '>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Product</h1>
              <a href="" className=''>Overview</a>

              <a href="">Features</a>
              <a href="">Solutions</a>
              <a href="">Tutorials</a>
              <a href="">Pricing</a>
              <a href="">Releases</a>
            </div>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Company</h1>
              <a href="">About Us</a>
              <a href="">Careers</a>
              <a href="">Press</a>
              <a href="">News</a>
              <a href="">Media Kit</a>
              <a href="">Contact</a>
            </div>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Resources</h1>
              <a href="">Blog</a>
              <a href="">Newsletter</a>
              <a href="">Events</a>
              <a href="">Help center</a>
              <a href="">Tutorials</a>
              <a href="">Support</a>
            </div>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Usecases</h1>
              <a href="">Startups</a>
              <a href="">Enterprise</a>
              <a href="">Goverment</a>
              <a href="">Saas center</a>
              <a href="">Marketplaces</a>
              <a href="">Ecommerce</a>
            </div>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Social</h1>
              <a href="">Twitter</a>
              <a href="">Linkedin</a>
              <a href="">Facebook</a>
              <a href="">Github</a>
              <a href="">AngelList</a>
              <a href="">Dribble</a>
            </div>
            <div className='w-[61em] flex flex-col  justify-between gap-[16px] '>
              <h1 className='text-[#667085] font-[600] text-[0.7em]'>Legal</h1>
              <a href="">Terms</a>
              <a href="">Privacy</a>
              <a href="">Cookies</a>
              <a href="">Licenses</a>
              <a href="">Settings</a>
              <a href="">Contact</a>
            </div>

          </div>

        </div>
        <SectionDivider />
        <div className='w-[1280px] flex flex-col items-center justify-center '>
          <div className='w-[1216px] flex flex-row items-center justify-between '>
            <div ><a href=""><img src={logo} alt="" className="h-[1.5em] w-[5em]" /></a></div>
            <p>© 2077 zysktechnologies. All rights reserved.</p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default footer


function Section8() {
  return (
    <div className='w-full flex flex-col items-center justify-center h-[374px]  bg-[#F9FAFB]' >
      <div className='w-[1280px] flex flex-col items-center justify-between h-[182px] '>
        <div className='flex flex-col justify-between items-center gap-20px'>
          <p className='text-[36px] font-[600]'>Start your free trial</p>
          <p className='text-[20px] font-[400]'>Join over 4,000+ startups already growing with Untitled.</p>
        </div>
        <div className='flex flex-row items-center justify-between gap-[12px]'>
          <button className='w-[148px] h-[48px] bg-white text-black rounded-[8px] border-2 border-[#D0D5DD] shadow-[0_1px_2px_0px_#1018280D]'>Learn more</button>
          <button className='w-[148px] h-[48px] bg-red-500 text-white rounded-[8px]'>Get started</button>
        </div>
      </div>
    </div>
  )
}