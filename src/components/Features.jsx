import React, {useRef} from 'react'
import {content, stars} from '../assets/index'
import { testomonials } from '../data'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";

const Features = () => {

  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollLeft += 400
  }

  const scrollRight = () => {
    scrollRef.current.scrollRight -= 400
  }

  
  return (
    <section className='my-[100px] grid grid-cols-2 gap-6 w-[94%] mx-[3%] sm:w-[90%] sm:mx-[5%] 2xl:w-[60%] 2xl:mx-[20%] py-8' id="resources">

      <div className='col-span-2 md:col-span-1'>
       <div className='overflow-x-scroll scroll-container flex gap-4' ref={scrollRef}>      
          {testomonials.map((item, index) => (
             <article key={index} className='min-w-[400px]'>
               <img src={item.image} alt="logo" className='w-20'/>
                 <img src={stars} alt="ratings" className='my-6 w-24'/>
               <p className='text-lg sm:text-2xl font-semibold'>{item.message}</p>

               <div className='flex gap-4 mt-4'>
                 <img src={item.profile} alt="profile" className='w-12'/>
                 <div>
                   <p className='font-semibold'>{item.name}</p>
                   <p className='text-sm'>{item.posision}</p>
                 </div>
               </div>
             </article>
          ))}
       </div>

        <div className='flex gap-4 mt-6'>
         <HiOutlineArrowNarrowLeft 
            size={30} 
            className='bg-white border border-[#B2DDFF] rounded-full p-1 text-blue-600 cursor-pointer'
            onClick={scrollLeft}
          />
          <HiOutlineArrowNarrowRight 
             size={30} 
             className='bg-white border border-[#B2DDFF] rounded-full p-1 text-blue-600 cursor-pointer'
             onClick={scrollRight}
          />
        </div>
       </div>

       <div className='col-span-2 md:col-span-1'  data-aos='zoom-in'>
        <img src={content} alt="" />
       </div>
    </section>
  )
}

export default Features