import React from 'react'
import company1 from './zysk icon folder/Logomark.png'
import company2 from './zysk icon folder/Logomark (1).png'
import company3 from './zysk icon folder/Logomark (2).png'
import company4 from './zysk icon folder/Logomark (3).png'
import company5 from './zysk icon folder/Logomark (4).png'
import company6 from './zysk icon folder/Logomark (5).png'


import icon from './zysk icon folder/Icon.png'
import icon1 from './zysk icon folder/Icon (1).png'
import icon2 from './zysk icon folder/Icon (2).png'
import icon3 from './zysk icon folder/Icon (3).png'
import icon4 from './zysk icon folder/Icon (4).png'
import icon5 from './zysk icon folder/Icon (5).png'


function socialProof() {
  return (
    <div className='h-[296px] w-full  flex flex-row items-center justify-center'>
      <div className='w-[64em] '>
        <div className='flex flex-col items-center gap-[32px]'>
          <div><p>Join 4,000+ companies already growing</p></div>
          <div className='flex flex-row items-center justify-between w-[61em] '>
            <Company
              img={company1}
              name={'Boltshift'}
            />
            <Company
              img={company2}
              name={'Boltshift'}
            />
            <Company
              img={company3}
              name={'Boltshift'}
            />
            <Company
              img={company4}
              name={'Boltshift'}
            />
            <Company
              img={company5}
              name={'Boltshift'}
            />
            <Company
              img={company6}
              name={'Boltshift'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default socialProof



function Company({ img, name }) {
  return (
    <div className='w-[8.5em] h-[2.5em]  flex flex-row items-center justify-around'>
      <div><img src={img} alt="" /></div>
      <div className='font-[700]'>{name}</div>
    </div>
  )
}

















export function FeatureSection() {
  return (
    <div className='h-[836px] w-full  flex flex-col items-center justify-around gap-16' >
      <div className='flex flex-col items-center gap-[48px]  h-[160px] w-[1280px]'>
        <div className='flex flex-col items-center gap-[20px]  h-[160px] w-[768px]'>
          <div className='text-red-600 text-[16px] font-[600]'><p>Features</p></div>

          <div><h1 className='text-[36px] font-[600]'>Analytics that feels like it’s from the future</h1></div>
          <div><p className='text-[20px] font-[400] text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p></div>
        </div>
      </div>


      <div className=' items-center h-[480px] w-[1280px]  flex flex-col justify-between'>
        <div className=' h-[178px] w-[1216px] flex flex-row justify-between'>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
            <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Share team inboxes</h2></p>
              <p className='text-[16px] text-center'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>
          </div>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
          <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon1} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Deliver instant answers</h2></p>
              <p className='text-[16px] text-center'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>
          </div>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
          <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon2} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Manage your team with reports</h2></p>
              <p className='text-[16px] text-center'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            </div>
          </div>
        </div>

        <div className=' h-[178px] w-[1216px] flex flex-row justify-between'>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
          <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon3} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Connect with customers</h2></p>
              <p className='text-[16px] text-center'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
            </div>
          </div>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
          <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon4} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Connect the tools you already use</h2></p>
              <p className='text-[16px] text-center'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>
          </div>
          <div className=' h-[178px] w-[384px] flex flex-col items-center gap-[20px] justify-between'>
          <div className='w-[48px] h-[48px] border-2 border-[#EAECF0] flex flex-col items-center justify-center shadow-[ 0_1px _2px_0px_#1018280D] rounded-[10px]'><img src={icon5} alt="" /></div>
            <div className='flex flex-col items-center'>
              <p><h2 className='text-[20px] font-[600]'>Our people make the difference</h2></p>
              <p className='text-[16px] text-center'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}