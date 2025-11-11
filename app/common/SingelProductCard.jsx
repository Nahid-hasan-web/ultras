import Image from 'next/image';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const SingelProductCard = ({porductImage , productName , productPrice , productStock}) => {
  return (
    <>
      <div className='w-full lg:w-[400px] rounded-[6px] '>
        {/* --------- card image */}
       <div className='p-[10px] h-[512px] overflow-hidden relative  group border border-[#EAEAEA]'>
        <Image src={porductImage}/>
          {/* add to cart button */}
          <div className='w-full lg:w-[348px] h-[65px] bg-white absolute px-[27px] duration-[.4s] bottom-[-100px] group-hover:bottom-[36px] left-[50%] translate-x-[-50%] justify-between flex items-center'>
            <button className='text-[17px] font-medium font-inter text-[#191919] flex items-center gap-[10px]  '>add To Cart <BsArrowRight/></button>
            <div className='flex  items-center gap-[29px]'>
               <button className=' relative' ><BsArrowsFullscreen/>
                <p className=' w-[88px] px-[6px] py-[4px] bg-[#292929] text-[14px] font-medium text-white  rounded-[3px] absolute left-[-40px] top-[-40px]'>Quick view <IoMdArrowDropdown className=' absolute left-[40px] bottom-[-12px] text-xl text-black'/></p>
               </button>
               <button><FaRegHeart/></button>
            </div>
          </div>
        </div> 
          <h2 className='text-[28px] font-semibold font-inter text-[#191919] mt-[34px] mb-[14px]'>{productName}</h2>
          <div>
            <div className='flex items-center justify-between'>

          <h2 className='text-[34px] font-light font-inter text-[#6995B1]'>${productPrice}</h2>
          <p className='text-[14px] font-medium font-inter text-black'>{productStock}</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default SingelProductCard