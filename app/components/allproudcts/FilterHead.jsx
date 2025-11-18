'use client'
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const FilterHead = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.getAll('skip'))

  return (
    <>
      <div className="py-2 ">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-textColor w-[300px]">
            Filter
          </h2>
          <div className="flex gap-3 items-center">
            <select
              onChange={(e)=>{useparams.push({skip:e.target.value})}}
              className="bg-white text-base font-normal text-gray-500 p-2 rounded-[5px] outline-none"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
            <select
              className="bg-white text-base font-normal text-gray-500 p-2 rounded-[5px] outline-none"
            >
              <option value="Low > High">{"Low > High"}</option>
              <option value="High > Low">{"High > Low"}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterHead;
