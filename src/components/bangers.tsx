import React from "react";
import { TextAnimate } from "./ui/text-animate";

const Bangers = () => {
  return (
    <div className="h-screen">
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="fontmed text-7xl  bg-redeclic text-white h-24  px-20 flex  items-center"
      >
       BANGERS
      </TextAnimate>
    </div>
  );
};

export default Bangers;
