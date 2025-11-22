
import SingelProductCard from "@/app/common/SingelProductCard";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Featured = async () => {




  const apiData = await fetch(
    "http://localhost:8000/product/getProduct_public?productLimit=4" , {cache:"no-store"}
  );
  const data = await apiData.json();

  return (
    <>
      <section id="featured" className="mt-10 md:mt-[60px] lg:mt-[140px]">
        <div className="container">
          {/* --------- heading */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold font-inter text-textColor">
              Featured products
            </h2>
            <Link
              className="flex  gap-2.5 text-[16px] md:text-[17px] font-medium font-inter text-textColor items-center"
              href={"/allproducts"}
            >
              View all products <BsArrowRight />
            </Link>
          </div>

          {/* products grid - responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-[30px] lg:mt-[61px]">
            {data.productList.map((item) => (
              <SingelProductCard
              key={item._id}
              item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
