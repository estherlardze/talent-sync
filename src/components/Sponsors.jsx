import React from 'react'
import {shopify, coinbase, dropbox, intercom, marvel, auto} from '../assets/index'

const Sponsors = () => {
  return (
    <section className='my-[100px]' data-aos='fade-up'> 
      <p className='text-lg text-gray-600 font-semibold text-center'>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>

      <div className='flex gap-8 my-8 overflow-x-scroll h-20 scroll-container'>
        <img src={shopify} alt="sponsor" className='h-8'/>
        <img src={coinbase} alt="sponsor"className='h-8' />
        <img src={dropbox} alt="sponsor" className='h-8'/>
        <img src={intercom} alt="sponsor" className='h-8'/>
        <img src={marvel} alt="sponsor" className='h-8'/>
        <img src={auto} alt="sponsor" className='h-6'/>
      </div>
    </section>
  )
}



export default Sponsors
