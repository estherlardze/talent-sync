import React, { useState } from 'react'
import {clear, group} from '../assets/index'
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
 const [menu, setMenu] = useState(false)

 const handleMenu = () => {
  setMenu(!menu)
 }

  return (
    <nav>
      <div className='flex justify-between items-center my-4 bg-[#F2F4F7] py-3 rounded-full px-4 border border-gray-200 '>
         <div className='flex gap-2 h-[15px] cursor-pointer'>
          <img src={group} alt="logo" />
           <img src={clear} alt="logo text" height='10px'/>
         </div>

         <ul className='lg:flex gap-4 items-center hidden'>
           <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer' >        
              <p>Products</p> 
              <MdKeyboardArrowDown/>
            </li>
            <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>
              <p>Solutions</p>
              <MdKeyboardArrowDown/>
            </li>
            <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>             
              <p>Resources</p>
              <MdKeyboardArrowDown/>
            </li>
            <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>         
              <p>Pricing</p>
              <MdKeyboardArrowDown/>
            </li>
         </ul>

         <div className='lg:flex gap-4 hidden'>
           <button className=' bg-white text-black px-5 py-1 rounded-full border border-gray-300'>
             Talk to sales
            </button>
          <button className='bg-[#175CD3] text-white px-5 py-1 rounded-full'>
            Sign up for free
          </button>
         </div>

         <div className='lg:hidden' onClick={handleMenu}>
           {menu ? <IoMdClose size={25}/> : <MdMenu size={25}/>}
         </div>
      </div>

      {menu && (
          <div className='fixed left-0 top-0 lg:hidden flex-col bg-white h-[100vh] w-[80%] py-4 pl-4'>
             <ul className='flex gap-4 flex-col'>
                <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer' >        
                  <p>Products</p> 
                  <MdKeyboardArrowDown/>
                </li>
                <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>
                  <p>Solutions</p>
                  <MdKeyboardArrowDown/>
                </li>
                <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>             
                  <p>Resources</p>
                  <MdKeyboardArrowDown/>
                </li>
                <li className='font-semibold text-gray-600 flex gap-1 items-center cursor-pointer'>         
                  <p>Pricing</p>
                  <MdKeyboardArrowDown/>
                </li>
            </ul>

            <div className='flex gap-4 flex-col mt-4'>
              <button className=' bg-white text-black px-5 py-1 rounded-full border border-gray-300 w-fit'>
                Talk to sales
              </button>
              <button className='bg-[#175CD3] text-white px-5 py-1 rounded-full w-fit'>
                Sign up for free
             </button>
           </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
