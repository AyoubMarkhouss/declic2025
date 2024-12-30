import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div className="w-screen relative h-96 flex justify-center items-center">
        <Image
          alt="d"
          src="/clickadyalna.jpg"
          height={2000}
          width={2000}
          className="w-screen h-96 object-cover  "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 h-96"></div>
        <h1 className="fontmed text-9xl text-redeclic absolute -bottom-16 ">CLICKA DYALNA</h1>
      </div>
    </div>
  );
};

export default Project;
