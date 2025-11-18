import SingelProductCard from "@/app/common/SingelProductCard";
import { Tabs } from "antd";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const BestSelling = () => {
  const items = [
    {
      key: "1",
      label: "All",
      children: (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item , i) => (
            <SingelProductCard key={i} />
          ))}
        </div>
      ),
    },

  ];
  return (
    <>
      <section className="mt-6 md:mt-[60px] lg:mt-[150px] pt-10 md:pt-[60px] pb-10 md:pb-20 bg-[#FAFAFA]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-[36px] lg:text-[42px] font-extrabold font-inter text-textColor">
              best selling products
            </h2>
            <Link
              className="flex gap-2.5 text-[16px] md:text-[17px] font-medium font-inter text-textColor items-center"
              href={"#"}
            >
              View all products <BsArrowRight />
            </Link>
          </div>
          <div className="mt-6">
            <Tabs defaultActiveKey="1" items={items} className="customTabls" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSelling;
