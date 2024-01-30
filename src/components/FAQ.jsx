import React, { useState } from 'react';
import { FAQs } from '../data';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className='grid grid-cols-2 my-[100px] gap-6 w-[94%] mx-[3%] sm:w-[90%] sm:mx-[5%] 2xl:w-[60%] 2xl:mx-[20%]'>
      <div className='col-span-2 md:col-span-1'>
        <p className='text-[#175CD3] font-semibold'>Support</p>
        <h1 className='font-bold text-2xl my-2'>FAQs</h1>
        <p className='font-semibold text-gray-600'>
          Everything you need to know about the product and billing. Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
      </div>

      <div className='col-span-2 md:col-span-1 relative' >
        {FAQs.map((faq, index) => (
          <article key={index} className='my-4 border rounded-md p-2 bg-black/5' data-aos='fade-left'>
            <div className='flex gap-4' onClick={() => handleToggle(index)}>
              <h4 className='font-bold text-lg'>{faq.title}</h4>
               <div className='absolute right-2'>
               {openIndex === index ? (
                <CiCircleMinus size={24} className='cursor-pointer'/>
              ) : (
                <CiCirclePlus size={24} className='cursor-pointer'/>
              )}
               </div>
            </div>
            {openIndex === index && <p className='text-gray-600 text-sm mt-2'>{faq.content}</p>}
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
