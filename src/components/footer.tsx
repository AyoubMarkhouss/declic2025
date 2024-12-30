import React from "react";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // const emptyArray = Array.from({ length: 5 });
  // const duplicatedSlides = [...emptyArray, ...emptyArray];
  return (
    <div className=" px-5 tablet:px-20 w-full grid grid-cols-2 tablet:grid-cols-4 bg-gradient-to-b from-redeclic to-[#b0011c] ">
      <div className="col-span-4 flex justify-center items-center py-5">
        <Image
          alt="declic"
          src="/declic-white.png"
          height={1500}
          width={1500}
          className="w-52"
        />
      </div>
      <div className="col-span-4 flex justify-between border-t-2 pt-10">
        <div className="col-span-1">
          <h2 className="fontmed text-2xl text-white ">
            We are in this location
          </h2>
          <p className="text-gray-300">location, location 25</p>
          <p className="text-gray-300">Casablanca, Maroc</p>
        </div>
        <div className="hidden tablet:block col-span-1">
          <h2 className="fontmed text-2xl text-white ">Get in touch</h2>
          <div className="flex items-center gap-x-4">
            <div className="border-2 rounded-full p-1.5  group hover:bg-white">
              <FaInstagram
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </div>
            <div className="border-2 rounded-full p-1.5 group hover:bg-white">
              <FaLinkedin
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </div>
            <div className="border-2 rounded-full p-1.5 group hover:bg-white">
              <FaFacebook
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block tablet:hidden col-span-1 pt-5">
        <h2 className="fontmed text-xl text-white ">Get in touch</h2>
        <div className="flex items-center gap-x-4">
          <div className="border-2 rounded-full p-1.5  group hover:bg-white">
            <FaInstagram
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </div>
          <div className="border-2 rounded-full p-1.5 group hover:bg-white">
            <FaLinkedin
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </div>
          <div className="border-2 rounded-full p-1.5 group hover:bg-white">
            <FaFacebook
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </div>
        </div>
      </div>

      <div className="col-span-4 py-10">
        <div className="grid col-span-2 tablet:grid-cols-4 ">
          <Link
            href="/"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Home
          </Link>
          <Link
            href="/"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Compagnes
          </Link>
          <Link
            href="/"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            About us
          </Link>
          <Link
            href="/"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="col-span-4 justify-center items-center pb-5">
        <p className="flex items-center justify-center text-xs text-gray-200">
          Declic Agency 2025 <FaRegCopyright className="" /> All Rights Reserved{" "}
        </p>
      </div>

      {/* <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 7,
              repeat: Infinity,
            },
          }}
        >
   
          {duplicatedSlides.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${250 / emptyArray.length}%` }}
            >
              <div className="fontmed text-white flex flex-col border-t-2  items-center justify-center h-full text-6xl">
                LET&apos;S COLLABORATE       
              </div>
            </div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Footer;
