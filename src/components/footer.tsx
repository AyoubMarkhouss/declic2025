import React from "react";
import { motion } from "framer-motion";


const Footer = () => {
  const emptyArray = Array.from({ length: 5 });
  const duplicatedSlides = [...emptyArray, ...emptyArray];
  return (
    <div className="w-full bg-gradient-to-b from-redeclic to-[#b0011c] space-y-80 mt-20">
      <div className="flex items-center justify-between px-28 py-5">
        <div>
          <p className="uppercase">Say hi</p>
          <p className="uppercase">agency@gmail.com</p>
        </div>
        {/* <div className="flex gap-10">
          <div>
            <p>TWITTER (X)</p>
            <p>LINKEDIN</p>
            <p>BEHANCE</p>
          </div>
          <button className="rounded-full relative">
            <span className="rounded-full absolute h-20 w-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2" />
            <span className="">
              BACK <br /> TO TOP
            </span>
          </button>
        </div> */}
      </div>
      <div className="relative w-full overflow-hidden">
        {/* Wrapping div for seamless looping */}
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
          {/* Render duplicated slides */}
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
      </div>
    </div>
  );
};

export default Footer;
