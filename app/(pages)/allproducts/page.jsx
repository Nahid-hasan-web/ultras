import FilterBy from "@/app/components/allproudcts/FilterBy";
import FilterHead from "@/app/components/allproudcts/FilterHead";
import ProductsPagination from "@/app/components/allproudcts/ProductsPagination";
import React from "react";

const page = async () => {

  const apiData =  await fetch('http://localhost:8000/product/getProduct_public' , {cache:"no-store"})
  const data = await apiData.json()
  


  return (
    <>
      <div className="bg-gray-200">
        <div className="container">
          <FilterHead />
          <div className="flex justify-between">
            <FilterBy />
            <ProductsPagination products={data.productList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
