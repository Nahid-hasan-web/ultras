'use client'
import Image from 'next/image';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import AddToCartButton from './AddToCartButton';

const SingelProductCard = ({porductImage , productName , productPrice , productStock , productId }) => {



  return (
    <>
      <div className='w-full lg:w-[400px] rounded-1.5  bg-white'>
        {/* --------- card image */}
       <div className='p-2.5 h-[512px] overflow-hidden relative  group border border-[#EAEAEA]'>
        <Image fill src={porductImage} alt={productName}/>
          {/* add to cart button */}
          <div className='w-full lg:w-[348px] h-[65px] bg-white absolute px-[27px] duration-[.4s] bottom-[-100px] group-hover:bottom-9 left-[50%] translate-x-[-50%] justify-between flex items-center'>
            <AddToCartButton productId={productId}/>
            <div className='flex  items-center gap-[29px]'>
               <button className=' relative' ><BsArrowsFullscreen/>
                <p className=' w-[88px] px-1.5 py-2 bg-[#292929] text-[14px] font-medium text-white  rounded-[3px] absolute -left-10 top-[-50px]'>Quick view <IoMdArrowDropdown className=' absolute left-10 -bottom-3 text-xl text-black'/></p>
               </button>
               <button><FaRegHeart/></button>
            </div>
          </div>
        </div> 
        <div className='p-6'>
          <h2 className='text-[16px] font-semibold font-inter text-[#191919] line-clamp-2 mb-3 hover:text-primary transition-colors duration-300'>{productName}</h2>
          <div className='flex items-center justify-between gap-3'>
            <div>
              <p className='text-[12px] font-medium font-inter text-[#888888] mb-1'>Price</p>
              <h3 className='text-[24px] font-bold font-inter text-primary'>${productPrice}</h3>
            </div>
            <div className='text-right'>
              <p className='text-[12px] font-medium font-inter text-[#888888] mb-1'>Stock</p>
              <p className={`text-[14px] font-semibold font-inter ${productStock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {productStock > 0 ? `${productStock} Available` : 'Out of Stock'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingelProductCard