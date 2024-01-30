import React from 'react'
import {ai, avatargroup, animo1, animo2, animo3, animo4, animo5, animo6, stars} from '../assets/index'
import {  IoIosVideocam } from "react-icons/io";
import { MdOutlineKeyboardVoice , MdOutlineEmojiEmotions} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";


const iconStyle = 'bg-white border border-[#B2DDFF] rounded-full p-1 text-blue-600 cursor-pointer'

const Header = () => {
  return (
    <section className='grid gap-8 grid-cols-5 my-[80px] overflow-hidden' id="products">
      <div className='col-span-5 lg:col-span-3' data-aos='fade-right'>
       <h1 className='text-4xl font-bold'>Uniting the world,<br /> one video call at a time</h1>
        <p className='text-gray-600 my-4 text-lg'>
          Experience the future of communication with ClearLink <br />  
          where crystal-clear video conferencing meets <br /> unparalleled simplicity.
        </p>

        <article className='flex flex-col sm:flex-row gap-3 mt-6 mb-9'>
            <button className='bg-[#175CD3] text-white px-5 py-1 rounded-full w-fit'>
              Start your free trial
            </button>
            <p className='flex items-center gap-2'><img src={ai}/> Discover AI assistant</p>
        </article>

        <article className='flex flex-col sm:flex-row gap-4'>
          <img src={avatargroup} alt="group avatar" />       

        <div className=''>
          <div className='flex gap-1 items-center'>
           <img src={stars} alt="" className='w-[120px]'/> 
           <p> 5.0</p>
          </div>
          <p>from 3,000+ reviews</p>
         </div>
        </article>
      </div>

      <div 
        className='flex flex-col col-span-5 lg:col-span-2 gap-4 bg-[#EFF8FF] px-6 py-6 pb-8 w-fit shadow-xl border border-blue-200 rounded-md'
        data-aos='zoom-in'
      >
        <article className='flex gap-4'>
          <img src={animo6} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
          <img src={animo5} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
          <img src={animo4} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
        </article>
        <article className='flex gap-4'>
          <img src={animo3} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
          <img src={animo2} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
          <img src={animo1} alt="avater" className='w-20 sm:w-24 2xl:w-32 2xl:h-30 h-24'/>
        </article>
         <article className='flex gap-4 justify-center items-center'>
           <MdOutlineKeyboardVoice size={30} className={iconStyle}/>
           <IoIosVideocam  size={28} className={iconStyle}/>
           <HiMiniComputerDesktop  size={28} className={iconStyle}/>
           <MdOutlineEmojiEmotions  size={28} className={iconStyle}/>
           <BiMessageRoundedDetail  size={28} className={iconStyle}/>
           <IoSettingsOutline  size={28} className={iconStyle}/>
         </article>
      </div>

    </section>
  )
}

export default Header