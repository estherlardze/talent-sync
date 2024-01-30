import React from 'react'
import { arrow, rectangle } from '../assets/index'
import { IoVideocamOutline } from "react-icons/io5";
import { TfiUnlock } from "react-icons/tfi";
import { CiCalendarDate } from "react-icons/ci";

const WhyChooseUs = () => {
  return (
    <section id="solutions">
      <div className='flex'>
        <article data-aos='fade-up'>
         <p className='text-[#175CD3] font-semibold'>The ClearLink Advantage</p>
         <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold my-4'>Why choose ClearLink?</h1>
         <p className=' text-gray-600'>
          In a world where connection is everything, 
          ClearLink takes the lead. Our <br /> cutting-edge video conferencing app offers:
         </p>
        </article>

        <article className='hidden sm:block' data-aos='fade-up'>
          <img src={arrow} alt="arrow" />
        </article>     
      </div>

      <div className='grid grid-cols-5 gap-6 mt-6'>
        <article className='col-span-5 lg:col-span-3 flex flex-col gap-6'>
           <div className='grid grid-cols-2 gap-6' >
             <div className='col-span-2 sm:col-span-1' data-aos='fade-right'>
               <IoVideocamOutline 
                 size={35} 
                 className='border font-bold border-gray-400 bg-gray-500/5 rounded-full p-2 text-blue-600'
                />
               <h4 className='my-2 font-bold text-lg'>Crystal-clear HD video</h4>
               <p className='text-gray-600 text-sm'>
                 No more pixelation or blurriness just stunning, lifelike clarity that 
                 brings your team closer in meetings.
               </p>
             </div>

             <div className='col-span-2 sm:col-span-1' data-aos='fade-right'>
               <CiCalendarDate 
                 size={35} 
                 className='border border-gray-400 bg-gray-500/5 rounded-full p-2 text-blue-600'
                />
               <h4 className='my-2 font-bold text-lg'>Noise-canceling audio</h4>
               <p className='text-gray-600 text-sm'>
               Say goodbye to distractions with our advanced audio tech for crisp, 
               interruption-free conversations.
               </p>
             </div>
           </div>

           <div className='grid grid-cols-2 gap-6'>
           <div className='col-span-2 sm:col-span-1' data-aos='fade-right'>
               <IoVideocamOutline 
                 size={35} 
                 className='border border-gray-400 bg-gray-500/5 rounded-full p-2 text-blue-600'
                />
               <h4 className='my-2 font-bold text-lg'>Scheduling made easy</h4>
               <p className='text-gray-600 text-sm'>
                Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings,
                send invitations, and receive reminders in one place.
               </p>
             </div>

             <div className='col-span-2 sm:col-span-1' data-aos='fade-right'>
               <TfiUnlock 
                 size={35} 
                 className='border border-gray-400 bg-gray-500/5 rounded-full p-2 text-blue-600'
                />
               <h4 className='my-2 font-bold text-lg'>Bank-grade security</h4>
               <p className='text-gray-600 text-sm'>
               Your privacy is our priority with bank-grade security protocols 
               safeguarding your meetings and data from unwanted intruders.
               </p>
             </div>
           </div>
        </article>

        <article className='col-span-5 lg:col-span-2 ' data-aos='fade-left'> 
          <img src={rectangle} alt="rectangle" className='w-[80%]'/>
        </article>
      </div>

    </section>
  )
}

export default WhyChooseUs
