import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SingelProductCard from '../common/SingelProductCard';

const Featured = () => {
  return (
    <>
    <section id='featured' className='mt-10 md:mt-[60px] lg:mt-[140px]'>
        <div className="container">
            {/* --------- heading */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <h2 className='text-[28px] md:text-[36px] lg:text-[42px] font-extrabold font-inter text-textColor'>Featured products</h2>
                <Link className='flex  gap-2.5 text-[16px] md:text-[17px] font-medium font-inter text-textColor items-center' href={'#'}>View all products <BsArrowRight/></Link>
            </div>

            {/* products grid - responsive columns */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-[30px] lg:mt-[61px]'>
                {
                    [1,2,3,4].map((item , i)=>(
                        <SingelProductCard key={i}/>
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Featured