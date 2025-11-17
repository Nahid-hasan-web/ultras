import FilterBy from "@/app/components/FilterBy";
import FilterHead from "@/app/components/FilterHead";
import ProductsPagination from "@/app/components/ProductsPagination";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="container">
          <FilterHead />
          <div className="flex justify-between">
            <FilterBy />
            <ProductsPagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
