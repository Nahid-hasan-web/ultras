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
          {[1, 2, 3, 4].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Shoes",
      children:  (
        <div className="flex gap-[50px] flex-wrap">
          {[1, 2, 3].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: "Pants",
      children: (
      <div className="flex gap-[50px] flex-wrap">
          {[1, 2, 3, 4].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: "Hoodie",
      children: (
        <div className="flex gap-[50px] flex-wrap">
          {[1, 2,].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "5",
      label: "outer",
      children: (
         <div className="flex gap-[50px] flex-wrap">
          {[1, 2, 3].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "6",
      label: "jackets",
      children: (
         <div className="flex gap-[50px] flex-wrap">
          {[1, 2,].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
    {
      key: "7",
      label: "Accessories",
      children:  (
        <div className="flex gap-[50px] flex-wrap">
          {[1].map((item) => (
            <SingelProductCard />
          ))}
        </div>
      ),
    },
  ];
  return (
    <>
      <section className="mt-[60px] lg:mt-[270px]">
        <div className="container">
          <div className="flex justify-between">
            <h2 className="text-[42px] font-extrabold font-inter text-[#1a1a1a]">
              best selling products
            </h2>
            <Link
              className="flex gap-[10px] text-[17px] font-medium font-inter text-[#191919] items-center"
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
