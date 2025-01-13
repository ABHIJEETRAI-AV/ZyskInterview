import React from 'react'
import icon from './zysk icon folder/Icon.png'
import icon5 from './zysk icon folder/Icon (5).png'
import demo from './zysk icon folder/play.svg'
import girl from './zysk icon folder/girl.jpg'
function dropdown() {
    return (
        <div className=' flex flex-row items-center justify-between  shadow-[0_0px_0px_2px_#1018280D] border-1 border-[#D0D5DD] w-[40em] h-[20em] rounded-[10px]'>
            <div className='flex flex-col items-center justify-around h-full w-[60%]  bg-white'>
                <div className='flex flex-row  justify-around h-[25%] w-[80%]  bg-white hover:bg-[#F9FAFB] rounded-[10px]'>
                    <div className='h-[20%]'><img src={icon} alt="" /></div>
                    <div className='flex flex-col  justify-between h-full w-[70%] '>
                        <h1 className='text-[1.2em] font-[600]'>Blog</h1>
                        <p className='text-[0.7em] font-[400] h-[60%]'>The latest industry news, updates and info.</p>
                    </div>
                </div>
                <div className='flex flex-row  justify-around h-[25%] w-[80%]  bg-white  hover:bg-[#F9FAFB] rounded-[10px]'>
                    <div className='h-[20%]'><img src={icon5} alt="" /></div>
                    <div className='flex flex-col  justify-between h-full w-[70%] '>
                        <h1 className='text-[1.2em] font-[600]'>Customer Stories</h1>
                        <p className='text-[0.7em] font-[400] h-[60%]'>The latest industry news, updates and info.</p>
                    </div>
                </div>
                <div className='flex flex-row  justify-around h-[25%] w-[80%]  bg-white  hover:bg-[#F9FAFB] rounded-[10px]'>
                    <div className='h-[20%]'><img src={demo} alt="" /></div>
                    <div className='flex flex-col  justify-between h-full w-[70%] '>
                        <h1 className='text-[1.2em] font-[600]'>Video tutorials</h1>
                        <p className='text-[0.7em] font-[400] h-[60%]'>The latest industry news, updates and info.</p>
                    </div>
                </div>
            </div>

            <div className='h-full w-[40%]  bg-[#F9FAFB]'>
                <div className='w-full h-[50%]  flex flex-col items-center justify-center '>
                    <img src={girl} alt="" className='w-[70%] h-[70%]  rounded-[10px]' />
                </div>
                <div className='flex flex-col  justify-around items-center w-full h-[50%] '>
                    <div className='flex flex-col  justify-around items-center h-[70%] w-[90%]  '>
                        <h1 className='text-[0.9em] font-[600] text-blue-700'>We've just released an update!</h1>
                        <p className='text-[0.7em] font-[400]'>Check out the all new dashboard view. Pages now load faster.</p>
                    </div>
                    <div className='flex flex-row  justify-around items-center h-[20%] w-[90%]  text-[0.8em] font-[600]'>
                        <a href="">Dissmiss</a>
                        <a href="" className='text-blue-500'>Changelog</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default dropdown
