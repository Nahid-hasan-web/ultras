'use client'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import visa from '../../public/images/visa.png'
import mastercard from '../../public/images/master.png'
import aexpress from '../../public/images/aexpress.png'
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="pt-8 pb-6 border-t border-[#EDEDED] bg-white">
  

      {/* Main footer columns */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Ultras</h3>
            <ul className="space-y-3">
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">About us</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Conditions</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Our Journals</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">FAQ</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Contact</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Privacy policy</a></li>
              <li><a className="text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="#">Returns & Refunds</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Contact Us</h3>
            <p className="text-[17px] font-medium font-raleway text-[#555555] mb-3">Do you have any questions or suggestions?</p>
            <a className="block text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919] mb-2" href="mailto:oursupport@example.com">oursupport@example.com</a>
            <a className="block text-[17px] font-medium font-raleway text-[#555555] hover:text-[#191919]" href="tel:+57444110035">+57 444 11 00 35</a>
          </div>

          <div>
            <h3 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Forever 2018</h3>
            <p className="text-[17px] font-medium font-raleway max-w-[420px] leading-[230%] text-[#555555] mb-4 ">Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
            <div className="flex gap-5 text-secend">
                <FaFacebookF/>
                <IoLogoInstagram/>
                <FaLinkedinIn/>
                <FaTwitter/>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#EDEDED] pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#9C9C9C]">© Copyrights 2021 Ultras. Designed by Templates Jungle</p>
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#9C9C9C]">Payment options :</span>
            <div className="flex gap-2">
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" >
                <Image src={visa} alt="Visa" />
              </div>
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" >
                <Image src={mastercard} alt="Mastercard" />
              </div>
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" >  
                <Image src={aexpress} alt="American Express" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer