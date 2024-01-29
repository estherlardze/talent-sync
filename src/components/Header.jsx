import React from 'react'
import {ai, avatargroup, animo1, animo2, animo3, animo4, animo5, animo6} from '../assets/index'
import { IoIosStar, IoIosVideocam } from "react-icons/io";
import { MdKeyboardVoice , MdOutlineEmojiEmotions} from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className='flex gap-5 grid-cols-2'>
      <div className='col-span-1'>
       <h1 className='text-3xl font-bold'>Uniting the world,one video call at a time</h1>
        <p>
          Experience the future of communication with ClearLink  
          where crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <article>
          <button className='bg-[#175CD3] text-white px-5 py-1 rounded-full'>
           Start your free trial
          </button>
          <p><img src={ai}/> Discover AI assistant</p>
        </article>

        <article>
          <img src={avatargroup} alt="" />
        </article>

        <article>
        <IoIosStar/>
        <IoIosStar/>
        <IoIosStar/>
        <IoIosStar/>
        <IoIosStar/>
        <p>5.0 from 3,000+ reviews</p>
        </article>
      </div>

      <div className='flex flex-col col-span-1'>
        <article className='flex gap-4'>
          <img src={animo6} alt=""  className='w-[120px]'/>
          <img src={animo5} alt="" className='w-[120px]'/>
          <img src={animo4} alt="" className='w-[120px]'/>
        </article>
        <article className='flex gap-4'>
          <img src={animo3} alt="" className='w-[120px]'/>
          <img src={animo2} alt="" className='w-[120px]'/>
          <img src={animo1} alt="" className='w-[120px]'/>
        </article>
      </div>
    </section>
  )
}

export default Header