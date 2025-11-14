import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Journal = () => {

      const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  ];
  return (
    <>
      <section id="Journal" className="mt-[100px]">
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
          <div className="flex justify-between mt-[55px]">
            {/* --------- singel journal card */}
            <div className="w-[570px]">
              <div className="w-full h-[348px] bg-gray-100 overflow-hidden"></div>
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-[64px] font-extrabold  font-inter text-primary"></h2>
                  <p className="text-sm font-medium font-raleway text-[#888888]">
                    {" "}
                    August <br /> 2021
                  </p>
                </div>
                <div className="w-[411px]">
                  <h2 className="text-[26px] font-black font-inter text-[#191919]">
                    top 10 casual look ideas to dress up your kids
                  </h2>
                  <p className="text-sm font-semibold font-raleway text-[#888888]">
                    tips & tricks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="overflow-hidden w-full py-6 bg-white">
      <div className="scroller flex w-max">
        {/* original list */}
        {brands.map((src, i) => (
          <img key={i} src={src} className="h-14 w-auto mx-6 object-contain" />
        ))}

        {/* duplicated list for seamless loop */}
        {brands.map((src, i) => (
          <img key={"dup-" + i} src={src} className="h-14 w-auto mx-6 object-contain" />
        ))}
      </div>
    </div>
    </>
  );
};

export default Journal;
