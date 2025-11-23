'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ProductSubImages = ({productImages}) => {
  const [mainImage , setMainImage ]= useState(productImages.thumbnail || '') 

  return (
    <>
      <div className='flex'>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-2'>
                {
                  productImages.subImages.map((item)=>(

                    <button onClick={()=>setMainImage(item)} className='w-25 h-25 bg-gray-200 overflow-hidden rounded-[10px]'>
                      <Image width={100} height={30} src={item} alt='product deatisl'/>
                    </button>
                  ))
                }
                
              </div>
              <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[600px] rounded-[10px]  overflow-hidden  bg-gray-200'>
                <Image width={500} height={400} src={mainImage}/>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductSubImages