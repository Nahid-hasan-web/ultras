import React from 'react'

const ProductSubImages = () => {
  return (
    <>
      <div className='flex'>
            <div className='flex gap-5'>
              <div className='flex flex-col gap-2'>
                <button className='w-25 h-25 bg-gray-200 rounded-[10px]'></button>
                <button className='w-25 h-25 bg-gray-200 rounded-[10px]'></button>
                <button className='w-25 h-25 bg-gray-200 rounded-[10px]'></button>
              </div>
              <div className='w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-[10px]  bg-gray-200'></div>
            </div>
          </div>
    </>
  )
}

export default ProductSubImages