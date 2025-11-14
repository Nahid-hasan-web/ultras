import React from 'react'

const SaleCounter = () => {
  return (
    <>
        <div className='flex items-center gap-4 '>
            <p className='text-[19px] font-inter  font-medium text-[#191919]'>Ends In</p>
            <div className='flex items-center  gap-1.5 '>
                <div className='py-[7px] px-[9px] border border-[#EAEAEA] bg-white rounded-md text-[26px] font-medium font-inter text-[#191919]'>02 <span  className='text-base'>D</span></div>
                :
                <div className='py-[7px] px-[9px] border border-[#EAEAEA] bg-white rounded-md text-[26px] font-medium font-inter text-[#191919]'>02 <span  className='text-base'>H</span></div>
                :
                <div className='py-[7px] px-[9px] border border-[#EAEAEA] bg-white rounded-md text-[26px] font-medium font-inter text-[#191919]'>02 <span  className='text-base'>M</span></div>
                :
                <div className='py-[7px] px-[9px] border border-[#EAEAEA] bg-white rounded-md text-[26px] font-medium font-inter text-[#191919]'>02 <span  className='text-base'>S</span></div>
                
            </div>
        </div>
    </>
  )
}

export default SaleCounter