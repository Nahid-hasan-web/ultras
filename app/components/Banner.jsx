'use client'
import React from 'react'
import bannerImage from '../../public/images/banner_image.png'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
const Banner = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
  return (
    <>
        <section id='Banner'>
            <div className="slider-container">
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