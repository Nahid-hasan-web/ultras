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
      <section id="Journal" className="mt-10 md:mt-[60px] lg:mt-[100px]">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold font-inter text-textColor">our Journal</h2>
            <Link className="flex gap-2.5 text-[16px] md:text-[17px] font-medium font-inter text-textColor items-center" href={"#"}>
              View all products <BsArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-[30px]">
            {/* --------- single journal card (responsive) */}
            {[1, 2, 3].map((item, i) => (
              <article key={i} className="rounded-lg overflow-hidden bg-white">
                <div className="w-full h-48 md:h-64 lg:h-[348px] bg-gray-100 overflow-hidden">
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <h3 className="text-4xl md:text-5xl lg:text-[64px] font-extralight font-inter text-primary leading-none">21</h3>
                      <p className="text-sm font-medium font-raleway text-[#888888]">August <br /> 2021</p>
                    </div>
                    <div className="sm:flex-1">
                      <h4 className="text-[20px] md:text-[22px] lg:text-[26px] font-black font-inter text-textColor">top 10 casual look ideas to dress up your kids</h4>
                      <p className="text-sm font-semibold font-raleway text-[#888888] mt-2">tips & tricks</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journal;
