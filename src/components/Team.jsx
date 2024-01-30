import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { screen } from '../assets/index'


const data = [
  {
    icon: <IoIosCheckmarkCircleOutline/>,
    text: '30 days free trial'
  },
  {
    icon: <IoIosCheckmarkCircleOutline/>,
    text: 'Cancel at any time'
  },
  {
    icon: <IoIosCheckmarkCircleOutline/>,
    text: 'Access to all features'
  },
  {
    icon: <IoIosCheckmarkCircleOutline/>,
    text: 'Peronalized onboarding'
  }
]
const Team = () => {
  return (
    <section className='mt-[60px] grid grid-cols-7 ml-[5%] gap-10 lg:gap-6 2xl:w-[60%] 2xl:mx-[20%]' id='pricing'>
       <div className='col-span-7 lg:col-span-3' data-aos='fade-right'>
        <h1 className='font-bold text-2xl my-3'>
          Ready to clear the path to perfect communication?
        </h1>

        {data.map((item, index) => (
          <article key={index} className='flex my-2 gap-2 items-center'>
           <p className='text-blue-600'>{item.icon}</p>
           <p className='text-gray-600'>{item.text}</p>
          </article>
        ))}

             <div className='flex gap-4  mt-4'>
              <button className=' bg-white text-black px-5 py-1 rounded-full border border-gray-300 w-fit'>
                Talk to sales
              </button>
              <button className='bg-[#175CD3] text-white px-5 py-1 rounded-full w-fit'>
                Sign up for free
             </button>
           </div>
       </div>

       <div className='col-span-7 lg:col-span-4 h-[80%]' data-aos='zoom-in'>
         <img src={screen} alt="screen" />
       </div>
    </section>
  )
}

export default Team