import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SingelProductCard from '../common/SingelProductCard';

const Featured = () => {
  return (
    <>
    <section id='featured' className=' mt-[60px] lg:mt-[140px]'>
        <div className="container">
            {/* --------- heading */}
            <div className='flex items-center justify-between'>
                <h2 className='text-[42px] font-extrabold font-inter text-textColor'>Featured products</h2>
                <Link className='flex gap-[10px] text-[17px] font-medium font-inter text-[#191919] items-center' href={'#'}>View all products <BsArrowRight/></Link>
            </div>
            <div className='flex justify-between mt-[61px]'>
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