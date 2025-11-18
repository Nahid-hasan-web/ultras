import React from 'react'
import { FiTruck, FiRefreshCw, FiPercent, FiHelpCircle } from 'react-icons/fi'
import ServiceItem from '../common/ServiceItem'
const Services = () => {
  return (
    <>
        {/* Services row */}
      <div className="container mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <ServiceItem Icon={FiTruck} title="Free Shipping" subtitle="Over $200" />
          <ServiceItem Icon={FiRefreshCw} title="Money Back" subtitle="Return Within 7 Days" />
          <ServiceItem Icon={FiPercent} title="Buy 4 Get 5th" subtitle="50% Off" />
          <ServiceItem Icon={FiHelpCircle} title="Any Questions?" subtitle="Experts Are Ready" />
        </div>
      </div>
    </>
  )
}

export default Services