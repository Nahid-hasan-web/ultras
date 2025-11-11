import React from "react";
import gridImage1 from '../../public/images/gridImage1.png'
import gridImage2 from '../../public/images/gridImage2.png'
import gridImage3 from '../../public/images/gridImage3.png'
import Image from "next/image";

const GridDisplay = () => {

  return (
    <>
      <section id="gridDisplay" className=" mt-[140px] lg:mt-[140px] ">
        <div className="container">
          <div class="grid grid-cols-5 grid-rows-6 h-[700px] gap-[55px]">
            <div class="col-span-3 row-span-6 bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-[10px] overflow-hidden">
              <Image src={gridImage1} alt="grid image"/>
            </div>
            <div class="col-span-2 row-span-3 col-start-4 bg-gray-300 flex items-center justify-center text-2xl font-bold rounded-[10px] overflow-hidden">
              <Image src={gridImage2} alt="grid image"/>
              
            </div>
            <div class="col-span-2 row-span-3 col-start-4 row-start-4 bg-gray-400 flex items-center justify-center text-2xl font-bold rounded-[10px] overflow-hidden">
              <Image src={gridImage3} alt="grid image"/>
              
            </div>
          </div>

            <div className="flex items-center justify-between mt-[150px]">
                <div>
                    <h2 className="text-[42px] font-extrabold font-inter text-textColor">
                        get 25% off Discount Coupons
                    </h2>
                    <p className=" w-full lg:w-[754px] text-lg font-medium font-raleway text-[#555555] leading-[230%] mt-[34px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
                    </p>
                </div>
                <div className="w-full lg:w-[790px] border border-[#EAEAEA] flex  justify-between bg-[#FAFAFA] h-[77px]">
                    <input placeholder="Enter your email address here..."  className="pl-[35px] outline-none  placeholder:italic flex-1" type="text" />
                    <button className="py-[28x] px-[50px] active:scale-[1.1] bg-[#191919] text-[17px] font-medium font-inter text-[#ffffff]">Subscribe now</button>

                </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default GridDisplay;
