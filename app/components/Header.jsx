import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {

    const headerSocials = [
        {
            socialIcons:<FaFacebookF/>,
            socialLinks:'#'
        },
        {
            socialIcons:<SlSocialInstagram/>,
            socialLinks:'#'
        },
        {
            socialIcons:<GrLinkedinOption/>,
            socialLinks:'#'
        },
        {
            socialIcons:<BsTwitterX/>,
            socialLinks:'#'
        },
    ]

  return (
    <>
        <header className='py-[15px]'>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* ---- social icons */}
                    <div className='socialIcons flex gap-2'>
                        {
                            headerSocials.map((item , i)=>(
                                <Link key={i} className='text-sm text-secend duration-[.4s] hover:text-primary' href={item.socialLinks}>{item.socialIcons}</Link>
                            ))
                        }
                    </div>
                    <p className='text-sm font-normal font-inter text-[#9C9C9C]'>
                        Free shipping on a purchase value of $ 200
                    </p>
                    <a href='tel:+57 444 11 00 35' className='text-sm font-normal font-inter text-[#9C9C9C]'>
                        Let's talk!  +57 444 11 00 35
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header