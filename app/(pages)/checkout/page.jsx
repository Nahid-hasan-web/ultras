"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Checkbox, Progress, Steps } from 'antd'
import CheckoutForm from '@/app/components/checkout/CheckoutForm'
import CheckoutBox from '@/app/components/checkout/CheckoutBox'



const Checkout = () => {

  const [currentStep, setCurrentStep] = useState(1)
  const [formData , setFormData] = useState({customerName:'' ,phone:'',distick:'',address:'' , email:'' ,comment:''})

  
  return (
    <div className="min-h-screen bg-white py-8 md:py-12 lg:py-16">
      <div className="container">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl font-semibold font-inter text-textColor mb-8">Checkout</h1>
          <Steps
            current={currentStep}
            items={[
              {
                title: 'Add to cart',
              },
              {
                title: 'Review',
                description: 'Order',
              },
              {
                title: 'Confirm Order',
              },
            ]}
            style={{
              '--steps-finish-line-color': '#2D6AE3',
              '--steps-finish-title-color': '#1A1A1A',
              '--steps-process-icon-border-color': '#2D6AE3',
              '--steps-process-icon-color': 'white',
              '--steps-process-icon-bg': '#2D6AE3',
            }}
          />
        </div>

        {/* Main Grid */}
        <div className="flex lg:justify-between  lg:gap-20">
            <CheckoutForm formInfo={setFormData} />
            <CheckoutBox formData={formData}/>
        </div>
      </div>
    </div>
  )
}

export default Checkout