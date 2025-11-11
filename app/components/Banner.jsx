'use client'
import React from 'react'
import bannerImage from '../../public/images/banner_image.png'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { MdDisabledVisible, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Banner = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false,
            nextArrow:    <div><button className='w-[54px] h-[54px] bg-[#fff] flex justify-center items-center text-2xl absolute top-[50%] lg:right-[-28px] translate-[-50%] z-[30]'><MdOutlineKeyboardArrowRight/></button></div>,
            prevArrow:    <div><button className='w-[54px] h-[54px] bg-[#fff] flex justify-center items-center text-2xl absolute top-[50%] lg:left-[28px] translate-[-50%] z-[30]'><MdOutlineKeyboardArrowLeft/></button></div>
        };
  return (
    <>  
        <section id='Banner' className=' overflow-hidden'>


            <div className="slider-container  relative">
             <Slider {...settings}>
                    <div className='w-full h-screen'><Image src={bannerImage} alt='banner image'/></div>
                    <div className='w-full h-screen'><Image src={bannerImage} alt='banner image'/></div>
                    <div className='w-full h-screen'><Image src={bannerImage} alt='banner image'/></div>
                    <div className='w-full h-screen'><Image src={bannerImage} alt='banner image'/></div>
                    <div className='w-full h-screen'><Image src={bannerImage} alt='banner image'/></div>
             </Slider>
            </div>
        </section>
    </>
  )
}

export default Banner