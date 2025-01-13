import React from 'react'
import blog1 from './zysk icon folder/blog1.svg'
import blog2 from './zysk icon folder/blog2.svg'
import blog3 from './zysk icon folder/blog3.svg'
import goto from './zysk icon folder/goto.svg'
import profile from './zysk icon folder/Olivia.svg'
function blog() {
    return (
        <div className='flex flex-col items-center justify-around w-full h-[830px] '>
            <div className='flex flex-col items-center justify-around w-[1280px] h-[130px] '>
                <div className='flex flex-row justify-between w-[1216px] h-[130px]  '>
                    <div>
                        <div className='flex flex-col  justify-around'>
                            <p className='text-[16px] font-[600] text-red-500'>Our blog</p>
                            <p className='text-[36px] font-[600]'>Lastest blog posts</p>
                        </div>
                        <p className='text-[20px] font-[400]'>Tool and strategies modern teams need to help their companies grow.</p>

                    </div>
                    <div><button className='w-[148px] h-[48px] bg-red-500 hover:bg-violet-700 text-white rounded-[8px]'>View all posts</button></div>
                </div>
            </div>



            <div className='flex flex-row justify-center items-center w-[1280px] h-[444px] '>
                <div className='flex flex-row justify-between w-[1216px] h-[444px]  '>

                    <BlogCard
                        img={blog1}
                        blogData={{
                            name: 'Olivia Rhye',
                            date: '20 Jan 2024',
                            sub: 'Design',
                            img: profile,
                            heading: 'UX review presentations',
                            content: 'How do you create compelling presentations that wow your colleagues and impress your managers?'
                        }}
                    />
                    <BlogCard
                        img={blog2}
                        blogData={{
                            name: 'Phoenix Baker',
                            date: '19 Jan 2024',
                            sub: 'Product',
                            img: profile,
                            heading: 'Migrating to Linear 101',
                            content: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'
                        }}
                    />
                    <BlogCard
                        img={blog3}
                        blogData={{
                            name: 'Lana Steiner',
                            date: '18 Jan 2024',
                            sub: 'Software Engineering',
                            heading: 'Building your API stack',
                            img: profile,
                            content: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.'
                        }}
                    />


                </div>


            </div>
        </div>
    )
}

export default blog


function BlogCard({ img, blogData }) {
    return (
        <div className='flex flex-col items-center justify-between w-[384px] h-[444px] '>
            <img src={img} alt="" className='w-[384px] h-[240px]' />
            <div className='flex flex-col justify-between  w-[384px] h-[180px]'>
                <div className='flex flex-col justify-between  w-[384px] h-[116px]'>
                    <p className=' text-[14px] font-[600] text-red-500'>{blogData.sub}</p>
                    <div className=' flex flex-col items-center justify-between w-full '>
                        <div className=' flex flex-row items-center justify-between  w-full  '>

                            <p className='text-[24px] font-[600]' >{blogData.heading}</p>
                            <img src={goto} alt="" />

                        </div>
                        <p className='text-[0.98em] font-[400] leading-[24px] w-[384px] h-[116px] '>{blogData.content}</p>
                    </div>


                </div>
                <div className='flex flex-row items-center justify-between   w-[136px] h-[40px]'>
                    <img src={blogData.img} alt="" />
                    <div className='flex flex-col  justify-between    '>
                        <p className='text-[0.8em] font-[600] '>{blogData.name}</p>
                        <p className='text-[0.8em] font-[400]'>{blogData.date}</p>
                    </div>
                </div>



            </div>

        </div>
    )
}


