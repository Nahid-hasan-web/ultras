"use client";
import React, { useState } from "react";
import { Slider, Switch } from "antd";
const FilterBy = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);

  return (
    <>

      <div className="w-[350px] h-fit p-10 bg-white">
        {/* -------------------------
            filter by price range
        ---------------------------*/}
        <h2 className="text-lg font-medium font-inter text-textColor">
          Price Range
        </h2>
        <div className="flex items-center gap-3">
          <p className="text-base font-medium text-secend">
            {priceRange[0]} to {priceRange[1]}
          </p>
        </div>
        <Slider
          onChange={setPriceRange}
          range={{ draggableTrack: true }}
          min={50}
          max={5000}
          defaultValue={[50, 500]}
        />
        {/* -------------------------
            filter by size 
        ---------------------------*/}
        <h2 className="text-lg font-medium font-inter text-textColor mt-5">
          Size
        </h2>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="esm" type="checkbox" />
          <label className="text-sm font-medium text-textColor" htmlFor="esm">
            ESM
          </label>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="m" type="checkbox" />
          <label className="text-sm font-medium text-textColor" htmlFor="m">
            M
          </label>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="lg" type="checkbox" />
          <label className="text-sm font-medium text-textColor" htmlFor="lg">
            LG
          </label>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="xl" type="checkbox" />
          <label className="text-sm font-medium text-textColor " htmlFor="xl">
            XL
          </label>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="xxl" type="checkbox" />
          <label className="text-sm font-medium text-textColor " htmlFor="xxl">
            XXL
          </label>
        </div>
        {/* -------------------------
            filter by Category 
        ---------------------------*/}
        <h2 className="text-lg font-medium font-inter text-textColor mt-5">
          Category
        </h2>
        <div className="flex items-center gap-1 mt-2">
          <input className="accent-black" id="t-shirt" type="checkbox" />
          <label
            className="text-sm font-medium text-textColor "
            htmlFor="t-shirt"
          >
            T-shirt
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterBy;
