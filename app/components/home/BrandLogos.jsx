import Image from 'next/image'
import React from 'react'
import brand1 from  '../../../public/images/brand1.png'
import brand2 from  '../../../public/images/brand2.png'
import brand3 from  '../../../public/images/brand3.png'
import brand4 from  '../../../public/images/brand4.png'
import brand5 from  '../../../public/images/brand5.png'
const BrandLogos = () => {
  return (
    <>
        <section id='barndLogo' className='bg-[#FAFAFA] py-[95px] lg:my-[140px] my-[60px]'>
            <div className="container">
                <marquee behavior="" direction="">

                    <div className='flex justify-between items-center'>
                        <Image  src={brand1} alt='Brand logos'/>
                        <Image  src={brand2} alt='Brand logos'/>
                        <Image  src={brand3} alt='Brand logos'/>
                        <Image  src={brand4} alt='Brand logos'/>
                        <Image  src={brand5} alt='Brand logos'/>
                    </div>
                </marquee>
            </div>
        </section>
    </>
  )
}

export default BrandLogos