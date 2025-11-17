"use client"
import React, { useState } from 'react'
import Image from 'next/image'

// Bangladesh districts
const BD_DISTRICTS = [
  'Dhaka',
  'Chittagong',
  'Khulna',
  'Rajshahi',
  'Sylhet',
  'Barisal',
  'Rangpur',
  'Mymensingh',
  'Narayanganj',
  'Gazipur',
  'Comilla',
  'Noakhali',
  'Feni',
  'Cox\'s Bazar',
  'Jessore',
  'Bogra',
  'Dinajpur',
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
    <div className="min-h-screen bg-white py-10 md:py-20">
      <div className="container">
        {/* breadcrumb/header */}
        <div className="mb-8">
          <h1 className="text-[28px] md:text-[42px] font-extrabold font-inter text-textColor">Checkout</h1>
        </div>

        {/* two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {/* LEFT: Delivery Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleConfirmOrder} className="bg-white">
              <h2 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Delivery Information</h2>

              {/* Name */}
              <div className="mb-6">
                <label className="block text-[17px] font-medium font-inter text-textColor mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[16px] font-raleway"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-[17px] font-medium font-inter text-textColor mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[16px] font-raleway"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-[17px] font-medium font-inter text-textColor mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="+880 1234567890"
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[16px] font-raleway"
                />
              </div>

              {/* District Dropdown */}
              <div className="mb-6">
                <label className="block text-[17px] font-medium font-inter text-textColor mb-2">District *</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[16px] font-raleway"
                >
                  <option value="">Select a district</option>
                  {BD_DISTRICTS.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              {/* Comments (Optional) */}
              <div className="mb-6">
                <label className="block text-[17px] font-medium font-inter text-textColor mb-2">Comments (Optional)</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleFormChange}
                  placeholder="Add any special instructions or comments..."
                  rows="4"
                  className="w-full px-4 py-3 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[16px] font-raleway resize-none"
                />
              </div>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-[#EAEAEA]">
              <h3 className="text-[26px] font-extrabold font-inter text-textColor mb-6">Order Summary</h3>

              {/* Product Items */}
              <div className="mb-6 pb-6 border-b border-[#EAEAEA] max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden shrink-0">
                      {/* Image placeholder */}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-medium font-raleway text-[#555555]">{item.title}</h4>
                      <p className="text-[14px] font-medium font-inter text-textColor mt-1">
                        {item.qty}x ${(item.price || 0).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Input */}
              <div className="mb-6">
                <label className="block text-[14px] font-medium font-inter text-[#555555] mb-2">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon"
                    className="flex-1 px-3 py-2 border border-[#EAEAEA] rounded-md outline-none focus:border-primary text-[14px] font-raleway"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-[#191919] text-white text-[14px] font-medium font-inter rounded-md"
                  >
                    Apply
                  </button>
                </div>
                {couponDiscount > 0 && (
                  <div className="mt-2 flex items-center justify-between text-[14px]">
                    <span className="text-green-600">Coupon applied!</span>
                    <button
                      type="button"
                      onClick={handleClearCoupon}
                      className="text-[#999999] hover:text-[#191919]"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-[#EAEAEA]">
                <div className="flex justify-between text-[16px] font-medium font-raleway text-[#555555]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-[16px] font-medium font-raleway text-green-600">
                    <span>Coupon Discount</span>
                    <span>-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[16px] font-medium font-raleway text-[#555555]">
                  <span>Delivery Charge</span>
                  <span>{deliveryCharge === 0 ? 'Free' : `$${deliveryCharge.toFixed(2)}`}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[20px] font-extrabold font-inter text-textColor">Total</span>
                <span className="text-[28px] font-extrabold font-inter text-primary">${total.toFixed(2)}</span>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirmOrder}
                className="w-full py-3 bg-[#191919] text-white text-[17px] font-medium font-inter rounded-md hover:bg-[#333333] transition-colors"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout