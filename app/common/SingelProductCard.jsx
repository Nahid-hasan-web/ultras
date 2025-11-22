'use client'
import Image from 'next/image';
import React from 'react'
import AddToCartButton from './buttons/AddToCartButton';
import DetailsButton from './buttons/DetailsButton';
import HeartButton from './buttons/HeartButton';

const SingelProductCard = ({item}) => {
  

  

  return (
    <>
      <div className='w-full lg:w-[400px] rounded-1.5  bg-white'>
        {/* --------- card image */}
       <div className='p-2.5 h-[512px] overflow-hidden relative  group border border-[#EAEAEA]'>
        <Image fill src={item.thumbnail} alt={item.title}/>
          {/* add to cart button */}
          <div className='w-full lg:w-[348px] h-[65px] bg-white absolute px-[27px] duration-[.4s] bottom-[-100px] group-hover:bottom-9 left-[50%] translate-x-[-50%] justify-between flex items-center'>
            <AddToCartButton productId={item._id}/>
            <div className='flex  items-center gap-[29px]'>
             <DetailsButton slug={item.slug}/>
               <HeartButton/>
            </div>
          </div>
        </div> 
        <div className='p-6'>
          <h2 className='text-[16px] font-semibold font-inter text-[#191919] line-clamp-2 mb-3 hover:text-primary transition-colors duration-300'>{item.title}</h2>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <p className='text-[12px] font-medium font-inter text-[#888888] mb-1'>Price</p>
              <h3 className='text-[24px] font-bold font-inter text-primary'>${item.discontPrice}</h3>
            </div>
            <div className='text-right'>
              <p className='text-[12px] font-medium font-inter text-[#888888] mb-1'>Stock</p>
              <p className={`text-[14px] font-semibold font-inter ${item.stock} > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {item.stock > 0 ? `${item.stock} Available` : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingelProductCard