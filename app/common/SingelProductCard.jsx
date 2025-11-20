'use client'
import Image from 'next/image';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const SingelProductCard = ({porductImage , productName , productPrice , productStock , productId }) => {


const handelClick = async () => {
  try {
    const response = await fetch('http://localhost:8000/cart/addCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        userId: "68c836cf11cd2114930d7c52",
        cartItem: [{ productId }]
      })
    });

    const data = await response.text(); // <-- use text() instead of json()
    console.log("Cart updated:", data);
    alert("Product added to cart successfully!");
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert("Failed to add product to cart");
  }
};
  return (
    <>
      <div className='w-full lg:w-[400px] rounded-1.5  bg-white'>
        {/* --------- card image */}
       <div className='p-2.5 h-[512px] overflow-hidden relative  group border border-[#EAEAEA]'>
        <Image fill src={porductImage} alt={productName}/>
          {/* add to cart button */}
          <div className='w-full lg:w-[348px] h-[65px] bg-red-500 absolute px-[27px] duration-[.4s] bottom-[-100px] group-hover:bottom-9 left-[50%] translate-x-[-50%] justify-between flex items-center'>
            <button onClick={handelClick} className='text-[17px] font-medium font-inter active:scale-[1.1] text-[#191919] flex items-center gap-2.5  '>add T0 Cart <BsArrowRight/></button>
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