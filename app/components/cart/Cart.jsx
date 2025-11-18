"use client"
import React from 'react'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { useRouter } from "next/navigation";


const Cart = ({ open, onClose , items = null }) => {
  const router   = useRouter()
  const sampleItems = [
    { id: 1, image: '/images/logo.png', title: 'Sample Product A', price: 49.0, qty: 1 },
    { id: 2, image: '/images/logo.png', title: 'Sample Product B', price: 29.0, qty: 2 },
  ]

  const list = items && items.length ? items : sampleItems

  const total = list.reduce((s, it) => s + (it.price || 0) * (it.qty || 1), 0)

  
  return (
    <div className={`fixed inset-0 z-50  ${open? "right-0":"right-[120%]"}`}>
      {/* backdrop */}
      <div className={`absolute ${open? "right-0" :"right-[-120%]"} duration-[.4s] inset-0 bg-black/40`} />
      {/* right panel */}
      <aside className={` absolute top-0 ${open? "right-0":"right-[-120%]"} duration-[.4s] right-0 h-full w-full md:w-[500px] bg-white shadow-lg z-60 overflow-auto`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-[26px] font-extrabold font-inter text-textColor">Cart</h3>
            <button onClick={onClose} aria-label="Close cart" className="text-2xl text-[#191919]">
              <IoMdClose />
            </button>
          </div>

          <div className="mt-6 flex-1">
            <ul className="space-y-4">
              {list.map((it) => (
                <li key={it.id} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden shrink-0">
                   
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[17px] font-medium font-raleway text-[#555555] hover:text-textColor">{it.title}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-[17px] font-medium font-inter text-textColor">${(it.price || 0).toFixed(2)}</div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center border border-[#EAEAEA] text-[16px]">-</button>
                        <div className="px-3 text-[16px] font-medium">{it.qty}</div>
                        <button className="w-8 h-8 flex items-center justify-center border border-[#EAEAEA] text-[16px]">+</button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-[#EAEAEA] pt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[17px] font-medium font-raleway text-[#555555]">Total</span>
              <span className="text-[20px] font-extrabold font-inter text-textColor">${total.toFixed(2)}</span>
            </div>
            <button onClick={()=>{
              onclose()
              router.push('/checkout')
            }} className="w-full inline-block text-center py-3 bg-[#191919] text-white text-[17px] font-medium font-inter rounded-md">Checkout</button>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Cart