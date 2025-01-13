import React from 'react'
import moreIcon from './zysk icon folder/more.svg'
import lessIcon from './zysk icon folder/less.svg'
import avatarGrp from './zysk icon folder/Avatar group.svg'
import { useState } from 'react';
import SectionDivider from './SectionDivider'

function faq() {
    return (
        <div className='flex flex-col items-center justify-around w-full h-auto min-h-[1216px] '>
            <FaqA />
            <FaqB />
            <FaqC />
        </div>
    )
}

export default faq








function FaqA() {
    return (
        <div className='flex flex-col items-center justify-center w-[1280px] h-[94px] '>
            <div className='flex flex-col items-center justify-center w-[1216px] h-[94px] '>
                <div className='flex flex-col items-center justify-center w-[768px] h-[94px] '>
                    <h1 className='text-[36px] font-[600]'>Frequently asked questions</h1>
                    <p className='text-[20px] font-[400]'>Everything you need to know about the product and billing.</p>
                </div>
            </div>
        </div>
    )
}








function FaqB() {
    return (
        <div className='flex flex-col items-center justify-center w-[1280px] h-auto max-h-[504px] '>
            <div className='flex flex-col items-center justify-center w-[768px] h-auto max-h-[504px] gap-[32px] '>
                <FaqItem
                question='Is there a free trial available?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                <SectionDivider/>
                <FaqItem
                question='Can I change my plan later?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                <SectionDivider/>
                <FaqItem
                question='What is your cancellation policy?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                <SectionDivider/>
                <FaqItem
                question='Can other info be added to an invoice?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                <SectionDivider/>
                <FaqItem
                question='How does billing work?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                <SectionDivider/>
                <FaqItem
                question='How do I change my account email?'
                answer='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                />
                

            </div>
        </div>
    )
}





function FaqItem({question, answer}) {


const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
    setIsActive(!isActive);
};
    return (
        <div className='flex flex-row  justify-between w-[768px] h-auto   '>

<div className='flex flex-col gap-[8px] justify-between w-[720px] h-auto   '>

                <div className='text-[1em] font-[500]'><p>{question}</p></div>
                <div className={`text-[0.8em] font-[400] ${isActive ? 'inline' : 'hidden'}`} id='supportText'>{answer}</div>
                {/* <div className='text-[0.8em] font-[400] ' id='supportText'>{answer}</div> */}
                </div>
            <div className='more' onClick={handleToggle}><img src={isActive ? lessIcon : moreIcon} alt="" /></div>

            {/* <div className='more'><img src={moreIcon} alt="" /></div> */}
        </div>
    )
}




















function FaqC() {
    return (
        <div className='flex flex-col items-center justify-center w-[1280px] h-[298px] '>
            <div className='flex flex-col items-center justify-around w-[1216px] h-[298px]  bg-[#F9FAFB] rounded-[10px]'>
                <div><img src={avatarGrp} alt="" /></div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[20px] font-[600]'>Still have questions?</h1>
                    <p className='text-[18px] font-[400]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <div>
                    <button className='w-[134px] h-[48px] bg-red-500 hover:bg-violet-700 text-white rounded-[8px]'>Get in touch</button>
                </div>

            </div>
        </div>
    )
}
