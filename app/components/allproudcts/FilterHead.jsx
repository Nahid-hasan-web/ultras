'use client'

import { useRouter } from "next/navigation";




const FilterHead = () => {
  const router = useRouter()
  

  return ( 
    <>
      <div className="py-2 ">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-textColor w-[300px]">
            Filter
          </h2>
          <div className="flex gap-3 items-center">
            <select
              onChange={(e)=>{router.push(`?limit=${e.target.value}`)}}
              className="bg-white text-base font-normal text-gray-500 p-2 rounded-[5px] outline-none"
            >

              <option value="5">Item per page</option>
              <option value="5">5</option>
              <option value="9">9</option>
              <option value="16">16</option>
              <option value="20">20</option>
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
