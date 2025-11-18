"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import Cart from "./cart/Cart";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showcart, setShowcart] = useState(false);
  const NavItems = [
    {
      navContent: "Women",
      navLink: "/",
    },
    {
      navContent: "Men",
      navLink: "/",
    },
    {
      navContent: "Kids",
      navLink: "/",
    },
    {
      navContent: "Accessories",
      navLink: "/",
    },
    {
      navContent: "Collections",
      navLink: "/",
    },
    {
      navContent: "Brand",
      navLink: "/",
    },
    {
      navContent: "Sale",
      navLink: "/",
    },
    {
      navContent: "Blog",
      navLink: "/",
    },
  ];
  return (
    <>
      <nav className="pt-[19px] pb-[30px] border-t border-[#EDEDED] hidden lg:block">
        <div className="container">
          <div className="nav_row flex justify-between items-center flex-wrap">
            <Link href={"/"} className=" w-20 lg:w-[124px] ">
              <Image src={logo} alt="logo" />
            </Link>
            <div className="flex gap-[47px] items-center">
              {NavItems.map((item, i) => (
                <Link
                  className="text-[17px] font-medium font-inter   text-[#191919]"
                  key={i}
                  href={item.navLink}
                >
                  {item.navContent}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 ">
              <button className="text-xl text-[#191919]">
                <IoMdSearch />
              </button>
              <Link href={"#"} className="text-xl text-[#191919]">
                <FaRegUser />
              </Link>
              <Link href={"#"} className="text-xl text-[#191919]">
                <FaRegHeart />
              </Link>
              <button
                onClick={() => setShowcart(!showcart)}
                className="text-2xl text-[#191919] active:scale-[1.1] relative"
              >
                <AiOutlineShopping />
                <span className="w-3.5 h-3.5 flex justify-center items-center text-[10px] font-normal font-inter text-[#191919] bg-[#D1E0EA] absolute -bottom-1.5 rounded-full right-0">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* ---------- phone navbar */}
      <nav className="pt-[19px] pb-[30px] border-t border-[#EDEDED] lg:hidden ">
        <div className="container">
          {/* ---- logo */}
          <div className="nav_row flex justify-between items-center flex-wrap">
            <Link href={"/"} className=" w-20 lg:w-[124px] ">
              <Image src={logo} alt="logo" />
            </Link>
            {/* ------- icons  */}
            <div className="flex items-center gap-4 ">
              <button className="text-xl text-[#191919]">
                <IoMdSearch />
              </button>
              <Link href={"#"} className="text-xl text-[#191919]">
                <FaRegUser />
              </Link>
              <Link href={"#"} className="text-xl text-[#191919]">
                <FaRegHeart />
              </Link>
              <button
                onClick={() => setShowcart(!showcart)}
                className="text-2xl text-[#191919] relative"
              >
                <AiOutlineShopping />
                <span className="w-3.5 h-3.5 flex justify-center items-center text-[10px] font-normal font-inter text-[#191919] bg-[#D1E0EA] absolute -bottom-1.5 rounded-full right-0">
                  1
                </span>
              </button>
            </div>
            {/* ------- menu button */}
            <button
              onClick={() => setShowNav(!showNav)}
              className="text-xl   relative"
            >
              <FaBars />
            </button>
            <div
              className={`flex gap-[15px] flex-col items-center absolute w-[330px] rounded-[10px] p-4 bg-[#D1E0EA] ${
                showNav ? "right-[15px]" : " right-[450px]"
              } duration-[.4s] top-[150px]`}
            >
              {NavItems.map((item, i) => (
                <Link
                  className="text-[17px] font-medium font-inter   text-[#191919]"
                  key={i}
                  href={item.navLink}
                >
                  {item.navContent}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <Cart onClose={() => setShowcart(!showcart)} open={showcart} />
    </>
  );
};

export default Navbar;
