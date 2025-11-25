'use client'
import React, { useState } from "react";

const CheckoutForm = ({formInfo}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    comments: "",
  });
  const BD_DISTRICTS = [
    "Bagerhat",
    "Barguna",
    "Barisal",
    "Bandarban",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chittagong",
    "Chuadanga",
    "Comilla",
    "Cox’s Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jessore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Nawabganj",
    "Netrokona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];
  return (
    <>
      <div className=" w-full lg:w-[900px]">
        <form  className="space-y-8">
          {/* Section 1: Delivery Info */}
          <div className="bg-white">
            <h2 className="text-2xl font-semibold font-inter text-textColor mb-8">
              Delivery Information
            </h2>

            {/* Name & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-base font-medium font-inter text-textColor mb-3">
                  Full Name
                </label>
                <input
                  onChange={(e)=>formInfo((prev)=>({...prev , customerName:e.target.value}))}
                  type="text"
                  name="userName"
                  placeholder="John Doe"
                  className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                />
              </div>
              <div>
                <label className="block text-base font-medium font-inter text-textColor mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={(e)=>formInfo((prev)=>({...prev , phone:e.target.value}))}
              
                  placeholder="+880 1234567890"
                  className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-base font-medium font-inter text-textColor mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                  onChange={(e)=>formInfo((prev)=>({...prev , email:e.target.value}))}
             
                placeholder="your@email.com"
                className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
              />
            </div>

            {/* District */}
            <div className="mb-6">
              <label className="block text-base font-medium font-inter text-textColor mb-3">
                District
              </label>
              <select
                name="district"
                  onChange={(e)=>formInfo((prev)=>({...prev , distick:e.target.value}))}
        
                className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway bg-white transition-all appearance-none bg-no-repeat bg-right"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%232D6AE3' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 16px center",
                  paddingRight: "40px",
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
            {/* address */}
           <div className="mb-6">
              <label className="block text-base font-medium font-inter text-textColor mb-3">
                 Address
              </label>
              <input
                type="address"
                name="address"
                  onChange={(e)=>formInfo((prev)=>({...prev , address:e.target.value}))}
             
                placeholder="your@email.com"
                className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
              />
            </div>
            {/* Comments */}
            <div>
              <label className="block text-base font-medium font-inter text-textColor mb-3">
                Delivery Instructions (Optional)
              </label>
              <textarea
                name="comments"
                onChange={(e)=>formInfo((prev)=>({...prev , comment:e.target.value}))}
      
                placeholder="Add any special delivery instructions..."
                rows="4"
                className="w-full px-4 py-4 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway resize-none transition-all placeholder:text-[#9EA3AB] leading-relaxed"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
