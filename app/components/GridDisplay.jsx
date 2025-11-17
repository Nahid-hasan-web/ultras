import React from "react";
import gridImage1 from '../../public/images/gridImage1.png'
import gridImage2 from '../../public/images/gridImage2.png'
import gridImage3 from '../../public/images/gridImage3.png'
import Image from "next/image";

const GridDisplay = () => {

  return (
    <>
      <section id="gridDisplay" className="mt-10 md:mt-[60px] lg:mt-[140px]">
        <div className="container">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-6 lg:h-[700px]">
            <div className="lg:col-span-3 lg:row-span-6 rounded-[10px] overflow-hidden">
              <div className="w-full h-[300px] lg:h-full">
                <Image src={gridImage1} alt="grid image" className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 rounded-[10px] overflow-hidden">
              <div className="w-full h-[200px] lg:h-full">
                <Image src={gridImage2} alt="grid image" className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-4 rounded-[10px] overflow-hidden">
              <div className="w-full h-[200px] lg:h-full">
                <Image src={gridImage3} alt="grid image" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mt-8 lg:mt-[150px]">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-extrabold font-inter text-textColor">
                get 25% off Discount Coupons
              </h2>
              <p className="text-base md:text-lg font-medium font-raleway text-[#555555] leading-relaxed mt-4 lg:mt-[34px] max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
              </p>
            </div>

            <div className="w-full lg:w-[540px] border border-[#EAEAEA] lg:flex bg-[#FAFAFA] h-[77px]">
              <input placeholder="Enter your email address here..." className="pl-5 outline-none placeholder:italic w-full lg:flex-1 bg-transparent" type="text" />
              <button className=" w-full lg:w-fit  py-1 px-4 mt-5 lg:mt-0 lg:py-3 lg:px-6 md:px-10 active:scale-[1.02] bg-[#191919] text-[17px] font-medium font-inter text-white">Subscribe now</button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default GridDisplay;
