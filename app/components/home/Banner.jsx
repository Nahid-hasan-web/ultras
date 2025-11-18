'use client'
import React from 'react'
import bannerImage from '../../../public/images/banner_image.png'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import {  MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const NextArrow = ({click})=>{
return <button onClick={click} className=' w-5 h-5 lg:w-[54px]   lg:h-[54px] bg-white flex justify-center items-center text-2xl absolute top-[50%]  right-0 translate-y-[-50%]  z-20'><MdOutlineKeyboardArrowRight/></button>
}

const PrevArrow = ({click})=>{
 return <button  onClick={click} className=' w-5 h-5 lg:w-[54px]   lg:h-[54px] bg-white  flex justify-center items-center text-2xl absolute top-[50%] left-0 translate-y-[-50%]  z-20'><MdOutlineKeyboardArrowLeft/></button>
}


const Banner = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            nextArrow:    <NextArrow/>,
            prevArrow:   <PrevArrow/>
      }
  return (
    <>  
        <section id='Banner' className=' overflow-hidden'>


            <div className="slider-container  relative">
             <Slider {...settings}>
                    <div className='w-full lg:h-screen'><Image className='w-full' src={bannerImage} alt='banner image'/></div>
                    <div className='w-full lg:h-screen'><Image className='w-full' src={bannerImage} alt='banner image'/></div>
                    <div className='w-full lg:h-screen'><Image className='w-full' src={bannerImage} alt='banner image'/></div>
                    <div className='w-full lg:h-screen'><Image className='w-full' src={bannerImage} alt='banner image'/></div>
                    <div className='w-full lg:h-screen'><Image className='w-full' src={bannerImage} alt='banner image'/></div>
             </Slider>
            </div>
        </section>
    </>
  )
}

export default Banner