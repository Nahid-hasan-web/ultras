"use client";
import React, { useEffect, useState } from "react";

const CheckoutBox = ({ formData }) => {
  const [couponApproved, setCuponDeveloped] = useState(false);
  const [cartProdcut, setCartProdcut] = useState([]);

  useEffect(() => {
    // ---------- cart api
    fetch(`http://localhost:8000/cart/getCart/68c836cf11cd2114930d7c52`)
      .then((res) => res.json())
      .then((data) => setCartProdcut(data))
      .catch((err) => console.log(err));
  }, []);

  const handelOrder = () => {
    fetch("http://localhost:8000/order/place-order", {
      method: "POST", 
      headers: {
      "Content-Type": "application/json",
      "Accept":'application/json'
    },
      body: JSON.stringify({
        cartId: cartProdcut.cartId,
        customerName: formData.customerName,
        phone: formData.phone,
        distick: formData.distick,
        address: formData.address,
        email: formData.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  console.log(cartProdcut.cartId, formData);

  return (
    <>
      <div className=" w-[500px]">
        <div className="sticky top-8 bg-white rounded-xl border border-[#EAEAEA] overflow-hidden shadow-sm">
          <div className="p-8">
            {/* Products */}
            <div className="mb-8 pb-8 border-b border-[#EAEAEA]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-semibold font-inter text-[#9EA3AB] uppercase tracking-wider">
                  Items
                </h4>
                <span className="text-sm font-semibold font-inter text-textColor"></span>
              </div>
              {cartProdcut?.cartItem?.map((item) => (
                <div className=" mb-5">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#F5F7FB] rounded-lg shrink-0 flex items-center justify-center overflow-hidden">
                      <span className="text-xs font-semibold text-textColor ">
                        <img src={item.productId.thumbnail} alt="" />
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium font-raleway text-textColor line-clamp-2 mb-1.5">
                        {item.productId.title}
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-raleway text-[#9EA3AB]">
                          {item.qty}
                        </span>
                        <span className="text-sm font-semibold font-inter text-textColor">
                          $ {item.productId.discontPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon Section */}
            <div className="mb-8 pb-8 border-b border-[#EAEAEA]">
              <label className="block text-sm font-semibold font-inter text-[#9EA3AB] mb-3 uppercase tracking-wider">
                Promo Code
              </label>
              <div className="flex lg:flex-row flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-4 py-3 border-2 border-[#D6D9DF] rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-base font-raleway transition-all placeholder:text-[#9EA3AB]"
                />
                <button
                  type="button"
                  className="px-3 py-1.5 lg:px-6 lg:py-3 border-2 border-textColor text-textColor text-base font-semibold font-inter rounded-lg hover:bg-[#F5F7FB] transition-all"
                >
                  Apply
                </button>
              </div>
              {couponApproved && (
                <div className="mt-3 p-3 bg-[#F0F9FF] rounded-lg flex items-center justify-between border border-primary/20">
                  <span className="text-sm font-semibold text-primary">
                    Discount applied
                  </span>
                  <button
                    type="button"
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
                <span className="text-base font-medium font-raleway text-[#9EA3AB]">
                  Subtotal
                </span>
                <span className="text-base font-semibold font-inter text-textColor">
                  {cartProdcut.total}
                </span>
              </div>
              {couponApproved && (
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium font-raleway text-[#10B981]">
                    Discount
                  </span>
                  <span className="text-base font-semibold font-inter text-[#10B981]">
                    Discount price
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-base font-medium font-raleway text-[#9EA3AB]">
                  Delivery
                </span>
              </div>
            </div>

            {/* Total - Bold & Prominent */}
            <div className="mb-8 pb-8 border-t-2 border-[#EAEAEA] pt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold font-inter text-[#9EA3AB]">
                  Total
                </span>
                <span className="text-3xl font-bold font-inter text-textColor">
                  {cartProdcut.total}
                </span>
              </div>
            </div>

            {/* CTA Button - 56px height */}
            <button
              onClick={handelOrder}
              className="w-full h-14 bg-textColor text-white text-lg font-semibold font-inter rounded-lg hover:bg-primary transition-all shadow-sm hover:shadow-md"
            >
              Confirm order
            </button>

            {/* Trust Badge */}
            <p className="text-center text-xs text-[#9EA3AB] font-raleway mt-6">
              Secure checkout - Your data is encrypted
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutBox;
