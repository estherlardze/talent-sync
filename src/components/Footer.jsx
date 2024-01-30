import React from 'react'
import {group, clear, appstore, googleplay} from '../assets/index'
import {legal, products, company, resourses} from '../data'
import { FaFacebook , FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-[94%] mx-[3%] sm:w-[90%] sm:mx-[5%] 2xl:w-[60%] 2xl:mx-[20%] pt-8'>
      <section className='grid grid-cols-8 gap-10 border-b pb-4'>
         <div className='col-span-8 sm:col-span-4 lg:col-span-3' data-aos='fade-right'>
            <div className='flex gap-2 h-[15px] cursor-pointer mb-4'>
              <img src={group} alt="logo" />
              <img src={clear} alt="logo text" height='10px'/>
            </div>
            <p className='text-sm'>
              ClearLink is your gateway to effortless,
              high-quality video conferencing. Join us in shaping 
              the future of communication!
            </p>
         </div>

         <div className=' col-span-4 sm:col-span-2 lg:col-span-1 ' data-aos='fade-right'>
           <h1 className='font-bold text-gray-600 mb-2'>Product</h1>
           {products.map((item, index) => (
             <p key={index} className='text-gray-700'>{item}</p>
           ))}
         </div>

         
         <div className='col-span-4 sm:col-span-2 lg:col-span-1' data-aos='fade-right'>
           <h1 className='font-bold text-gray-600 mb-2'>Company</h1>
           {company.map((item, index) => (
             <p key={index} className='text-gray-700'>{item}</p>
           ))}
         </div>

         
         <div className='col-span-4 sm:col-span-2 lg:col-span-1' data-aos='fade-right'>
           <h1 className='font-bold text-gray-600 mb-2'>Resourse</h1>
           {resourses.map((item, index) => (
             <p key={index} className='text-gray-700'>{item}</p>
           ))}
         </div>

         
         <div className='col-span-4 sm:col-span-2 lg:col-span-1' data-aos='fade-right'>
           <h1 className='font-bold text-gray-600 mb-2'>Legal</h1>
           {legal.map((item, index) => (
             <p key={index} className='text-gray-700'>{item}</p>
           ))}
         </div>

         <div className='flex flex-col gap-3 col-span-4 sm:col-span-2 lg:col-span-1 ' data-aos='fade-right'>
           <p className='text-blue-600 font-semibold '>
            Get the app
          </p>
          <img src={appstore} alt="appstore" />
          <img src={googleplay} alt="googleplay" />
         </div>
      </section>

      <div className='text-gray-600 my-8 flex gap-4 flex-col sm:flex-row justify-between'>
        <p>
        © 2023 ClearLink. All rights reserved.
        </p>

        <div className='flex gap-4 '>
          <FaLinkedin size={25}/>
          <FaTwitter size={25}/>
          <FaFacebook size={25}k/>
          <FaInstagram size={25}/>
          <FaGithub size={25}/>
          <FaYoutube size={25}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
