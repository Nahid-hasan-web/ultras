import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/logo.png'
import Image from 'next/image'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { AiOutlineShopping } from "react-icons/ai";



const Navbar = () => {

    const NavItems = [
        {
            navContent:"Women",
            navLink:'/',
        },
        {
            navContent:"Men",
            navLink:'/',
        },
        {
            navContent:"Kids",
            navLink:'/',
        },
        {
            navContent:"Accessories",
            navLink:'/',
        },
        {
            navContent:"Collections",
            navLink:'/',
        },
        {
            navContent:"Brand",
            navLink:'/',
        },
        {
            navContent:"Sale",
            navLink:'/',
        },
        {
            navContent:"Blog",
            navLink:'/',
        },
    ]



  return (
    <nav className='pt-[19px] pb-[30px] border-t border-[#EDEDED]'>
        <div className="container">
            <div className="nav_row flex justify-between items-center flex-wrap">
                <Link href={'/'} className=' w-[80px] lg:w-[124px] '><Image src={logo} alt='logo'/></Link>
                <div className='flex gap-[47px] items-center'>
                    {
                        NavItems.map((item , i)=>(

                            <Link 
                            className='text-[17px] font-medium font-inter   text-[#191919]'
                            key={i}
                            href={ item.navLink}
                            
                            >{item.navContent}</Link>
                        ))
                    }
                </div>
                <div className='flex items-center gap-4 '>
                    <button className='text-xl text-[#191919]'><IoMdSearch/></button>
                    <Link href={'#'} className='text-xl text-[#191919]'><FaRegUser/></Link>
                    <Link href={'#'} className='text-xl text-[#191919]'><FaRegHeart/></Link>
                    <button className='text-2xl text-[#191919] relative'><AiOutlineShopping/>
                        <span className='w-[14px] h-[14px] flex justify-center items-center text-[10px] font-normal font-inter text-[#191919] bg-[#D1E0EA] absolute bottom-[-6px] rounded-full right-0'>1</span>
                    </button>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar