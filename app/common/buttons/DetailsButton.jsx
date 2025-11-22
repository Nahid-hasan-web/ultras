'use client'

import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
const DetailsButton = ({slug }) => {
  
  const router = useRouter()

  const handelDetails = ()=>{
    router.push(`/productDetails/${slug}`)
  }
  return (
    <>
      <button onClick={handelDetails} className=" relative active:scale-[1.1]">
        <BsArrowsFullscreen />
        <p className=" w-[88px] px-1.5 py-2 bg-[#292929] text-[14px] font-medium text-white  rounded-[3px] absolute -left-10 top-[-50px]">
          Quick view{" "}
          <IoMdArrowDropdown className=" absolute left-10 -bottom-3 text-xl text-black" />
        </p>
      </button>
    </>
  );
};

export default DetailsButton;
