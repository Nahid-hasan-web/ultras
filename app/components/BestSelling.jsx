import { Tabs } from "antd";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import SingelProductCard from "../common/SingelProductCard";

const BestSelling = () => {
  const items = [
    {
      key: "1",
      label: "All",
      children: (
         <div className="flex gap-[50px] flex-wrap">
          {[1, 2, 3, 4].map((item , i) => (
            <SingelProductCard key={i} />
          ))}
        </div>
      ),
    },
 
  ];
  return (
    <>
      <section className="mt-[60px] lg:mt-[150px] pt-[122px] pb-[121px] bg-[#FAFAFA]">
        <div className="container">
          <div className="flex justify-between">
            <h2 className="text-[42px] font-extrabold font-inter text-[#1a1a1a]">
              best selling products
            </h2>
            <Link
              className="flex gap-2.5 text-[17px] font-medium font-inter text-[#191919] items-center"
              href={"#"}
            >
              View all products <BsArrowRight />
            </Link>
          </div>
          <Tabs defaultActiveKey="1" items={items} className="customTabls" />
        </div>
      </section>
    </>
  );
};

export default BestSelling;
