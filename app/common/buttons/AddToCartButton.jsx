"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AddToCartButton = ({ productId }) => {
  const handelClick =async() => {
    try{
       const apiRes = await  fetch('http://localhost:8000/cart/addCart',{
            method:"POST",
            headers:{
               "Content-Type":'application/json',
               "Accept":'application/json'
            }  ,
            body:JSON.stringify({
                userId:"68c836cf11cd2114930d7c52",
                cartItem:[{productId}]
            })
        })
        const data = await apiRes.text()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

  return (
    <>
      <button
        onClick={handelClick}
        className="text-[17px] font-medium font-inter active:scale-[1.1] text-[#191919] flex items-center gap-2.5  "
      >
        add To Cart <BsArrowRight />
      </button>
    </>
  );
};

export default AddToCartButton;
