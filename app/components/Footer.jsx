import React from 'react'
import { FiTruck, FiRefreshCw, FiPercent, FiHelpCircle } from 'react-icons/fi'

const ServiceItem = ({ Icon, title, subtitle }) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl text-primary mt-1"><Icon /></div>
    <div>
      <div className="text-[18px] font-semibold font-inter text-[#191919]">{title}</div>
      <div className="text-[14px] font-normal font-inter text-[#6B6B6B]">{subtitle}</div>
    </div>
  </div>
)

const Footer = () => {
  return (
    <footer className="pt-8 pb-6 border-t border-[#EDEDED] bg-white">
      {/* Services row */}
      <div className="container mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <ServiceItem Icon={FiTruck} title="Free Shipping" subtitle="Over $200" />
          <ServiceItem Icon={FiRefreshCw} title="Money Back" subtitle="Return Within 7 Days" />
          <ServiceItem Icon={FiPercent} title="Buy 4 Get 5th" subtitle="50% Off" />
          <ServiceItem Icon={FiHelpCircle} title="Any Questions?" subtitle="Experts Are Ready" />
        </div>
      </div>

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
            <p className="text-[17px] font-medium font-raleway text-[#555555] mb-4">Cras mattis sit amet in metus eu amet adipiscing enim. Ullamcorper in orci, ultricies inceptor eget arcu.</p>
            <div className="flex gap-3 text-[#6B6B6B]">
              <span className="w-8 h-8 rounded-full bg-[#F3F3F3] flex items-center justify-center">f</span>
              <span className="w-8 h-8 rounded-full bg-[#F3F3F3] flex items-center justify-center">in</span>
              <span className="w-8 h-8 rounded-full bg-[#F3F3F3] flex items-center justify-center">li</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#EDEDED] pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-[#9C9C9C]">© Copyrights 2021 Ultras. Designed by Templates Jungle</p>
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#9C9C9C]">Payment options :</span>
            <div className="flex gap-2">
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" />
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" />
              <div className="w-8 h-6 bg-[#F3F3F3] rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer