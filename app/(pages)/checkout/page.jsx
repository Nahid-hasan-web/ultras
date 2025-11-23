"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Progress, Steps } from 'antd'

// Bangladesh districts
const BD_DISTRICTS = [
  'Bagerhat',
  'Barguna',
  'Barisal',
  'Bandarban',
  'Bhola',
  'Bogra',
  'Brahmanbaria',
  'Chandpur',
  'Chittagong',
  'Chuadanga',
  'Comilla',
  'Cox’s Bazar',
  'Dhaka',
  'Dinajpur',
  'Faridpur',
  'Feni',
  'Gaibandha',
  'Gazipur',
  'Gopalganj',
  'Habiganj',
  'Jamalpur',
  'Jessore',
  'Jhalokati',
  'Jhenaidah',
  'Joypurhat',
  'Khagrachhari',
  'Khulna',
  'Kishoreganj',
  'Kurigram',
  'Kushtia',
  'Lakshmipur',
  'Lalmonirhat',
  'Madaripur',
  'Magura',
  'Manikganj',
  'Meherpur',
  'Moulvibazar',
  'Munshiganj',
  'Mymensingh',
  'Naogaon',
  'Narail',
  'Narayanganj',
  'Narsingdi',
  'Natore',
  'Nawabganj',
  'Netrokona',
  'Nilphamari',
  'Noakhali',
  'Pabna',
  'Panchagarh',
  'Patuakhali',
  'Pirojpur',
  'Rajbari',
  'Rajshahi',
  'Rangamati',
  'Rangpur',
  'Satkhira',
  'Shariatpur',
  'Sherpur',
  'Sirajganj',
  'Sunamganj',
  'Sylhet',
  'Tangail',
  'Thakurgaon'
]


const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    comments: '',
  })

  const [couponCode, setCouponCode] = useState('')
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [currentStep, setCurrentStep] = useState(1)

  // Sample cart items (replace with real data from context/props)
  const cartItems = [
    { id: 1, image: '/images/logo.png', title: 'Sample Product A', price: 49.0, qty: 1 },
    { id: 2, image: '/images/logo.png', title: 'Sample Product B', price: 29.0, qty: 2 },
  ]

  const subtotal = cartItems.reduce((sum, it) => sum + (it.price || 0) * (it.qty || 1), 0)
  const deliveryCharge = subtotal > 200 ? 0 : 10
  const total = subtotal - couponDiscount + deliveryCharge

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setCouponDiscount(Math.min(subtotal * 0.1, 50))
    } else {
      alert('Invalid coupon code')
    }
  }

  const handleClearCoupon = () => {
    setCouponCode('')
    setCouponDiscount(0)
  }

  const handleConfirmOrder = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.district) {
      alert('Please fill in all required fields')
      return
    }
    // TODO: submit to backend
    console.log('Order data:', { formData, cartItems, total })
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* LEFT: Form - 2 cols */}
          <div className="lg:col-span-2">
            <form onSubmit={handleConfirmOrder} className="space-y-8">
              {/* Section 1: Delivery Info */}
              <div className="bg-white">
                <h2 className="text-2xl font-semibold font-inter text-textColor mb-8">Delivery Information</h2>

                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-base font-medium font-inter text-textColor mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium font-inter text-textColor mb-3">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      
                      onChange={handleFormChange}
                      placeholder="+880 1234567890"
                      className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-base font-medium font-inter text-textColor mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                  />
                </div>

                {/* District */}
                <div className="mb-6">
                  <label className="block text-base font-medium font-inter text-textColor mb-3">District</label>
                  <select
                    name="district"
                    
                    onChange={handleFormChange}
                    className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway bg-white transition-all appearance-none bg-no-repeat bg-right"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232D6AE3' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 16px center',
                      paddingRight: '40px',
                    }}
                  >
                    <option value="">Select your district</option>
                    {BD_DISTRICTS.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-base font-medium font-inter text-textColor mb-3">Delivery Instructions (Optional)</label>
                  <textarea
                    name="comments"
                    
                    onChange={handleFormChange}
                    placeholder="Add any special delivery instructions..."
                    rows="4"
                    className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway resize-none transition-all placeholder:text-[#9EA3AB] leading-relaxed"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: Order Summary - 1 col */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-xl border border-[#EAEAEA] overflow-hidden shadow-sm">
          
              <div className="p-8">
                {/* Products */}
                <div className="mb-8 pb-8 border-b border-[#EAEAEA]">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-semibold font-inter text-[#9EA3AB] uppercase tracking-wider">Items</h4>
                    <span className="text-sm font-semibold font-inter text-textColor">({cartItems.length})</span>
                  </div>
                  <div className="space-y-5">
                    {[1,2,3].map((item , i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#F5F7FB] rounded-lg shrink-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-textColor">IMG</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium font-raleway text-textColor line-clamp-2 mb-1.5">title</h5>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-raleway text-[#9EA3AB]">1</span>
                            <span className="text-sm font-semibold font-inter text-textColor">price</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="mb-8 pb-8 border-b border-[#EAEAEA]">
                  <label className="block text-sm font-semibold font-inter text-[#9EA3AB] mb-3 uppercase tracking-wider">Promo Code</label>
                  <div className="flex lg:flex-row flex-col gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-3 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                    />
                    <button
                      type="button"
                      onClick={handleApplyCoupon}
                      className="px-3 py-1.5 lg:px-6 lg:py-3 border-2 border-textColor text-textColor text-base font-semibold font-inter rounded-lg hover:bg-[#F5F7FB] transition-all"
                    >
                      Apply
                    </button>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="mt-3 p-3 bg-[#F0F9FF] rounded-lg flex items-center justify-between border border-primary/20">
                      <span className="text-sm font-semibold text-primary">Discount applied</span>
                      <button
                        type="button"
                        onClick={handleClearCoupon}
                        className="text-sm font-medium text-primary hover:text-[#1E4DB8]"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium font-raleway text-[#9EA3AB]">Subtotal</span>
                    <span className="text-base font-semibold font-inter text-textColor">sbutotal price</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-base font-medium font-raleway text-[#10B981]">Discount</span>
                      <span className="text-base font-semibold font-inter text-[#10B981]">Discount price</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium font-raleway text-[#9EA3AB]">Delivery</span>
                    <span className={`text-base font-semibold font-inter ${deliveryCharge === 0 ? 'text-[#10B981]' : 'text-textColor'}`}>
                     delivery charge
                    </span>
                  </div>
                </div>

                {/* Total - Bold & Prominent */}
                <div className="mb-8 pb-8 border-t-2 border-[#EAEAEA] pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold font-inter text-[#9EA3AB]">Total</span>
                    <span className="text-3xl font-bold font-inter text-textColor">total price</span>
                  </div>
                </div>

                {/* CTA Button - 56px height */}
                <button
                  onClick={handleConfirmOrder}
                  className="w-full h-14 bg-textColor text-white text-lg font-semibold font-inter rounded-lg hover:bg-primary transition-all shadow-sm hover:shadow-md"
                >
                  Continue to Checkout
                </button>

                {/* Trust Badge */}
                <p className="text-center text-xs text-[#9EA3AB] font-raleway mt-6">Secure checkout - Your data is encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout