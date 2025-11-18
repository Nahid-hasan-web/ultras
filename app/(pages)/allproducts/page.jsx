import FilterBy from "@/app/components/FilterBy";
import FilterHead from "@/app/components/FilterHead";
import ProductsPagination from "@/app/components/ProductsPagination";
import React from "react";

const page = async () => {

  const apiData =  await fetch('http://localhost:8000/product/getProduct_public')
  const data = await apiData.json()

  console.log(data.productList)

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
