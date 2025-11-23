import React from 'react'

const SizeSelector = () => {
  return (
    <>
        <p className='text-sm font-normal text-primary'>Selecte Your size</p>
        <div className='flex gap-3 mt-5'>
        <button className='w-10 h-10 roudned-[5px] bg-gray-100 border-none text-sm font-medium text-textColor'>SM</button>
        <button className='w-10 h-10 roudned-[5px] bg-gray-100 border-none text-sm font-medium text-textColor'>L</button>
        <button className='w-10 h-10 roudned-[5px] bg-gray-100 border-none text-sm font-medium text-textColor'>XL</button>
        <button className='w-10 h-10 roudned-[5px] bg-gray-100 border-none text-sm font-medium text-textColor'>XXL</button>
        </div>
        
        <div className='flex gap-5 items-center mt-5'>
            <button className='py-2.5 px-5 rounded-[5px] bg-gray-200 text-base font-medium text-textColor active:scale-[1.1]'>Add to cart</button>
            <button className='py-2.5 px-5 rounded-[5px] bg-black text-base font-medium text-white active:scale-[1.1]'>Order Now</button>
        </div>
    </>
  )
}

export default SizeSelector