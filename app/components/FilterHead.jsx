import React from "react";

const FilterHead = () => {
  return (
    <>
      <div className="py-2 ">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-textColor w-[300px]">
            Filter
          </h2>
          <div className="flex gap-3 items-center">
            <select
              className="bg-white text-base font-normal text-gray-500 p-2 rounded-[5px] outline-none"
              name=""
              id=""
            >
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
            <select
              className="bg-white text-base font-normal text-gray-500 p-2 rounded-[5px] outline-none"
              name=""
              id=""
            >
              <option value="">{"Low > High"}</option>
              <option value="">{"High > Low"}</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterHead;
