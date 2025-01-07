import React, { useState } from "react";
import Image from "next/image";
import Header from "~/components/header-burger";
import Footer from "~/components/footer";
import Iphone15Pro from "~/components/ui/iphone-15-pro";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowCircleDown, FaStar } from "react-icons/fa";
import { cn } from "~/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/carousel";

const Project = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <div className="pt-20  overflow-x-hidden">
          <h1 className="fontmed text-7xl  px-20  bg-gradient-to-r from-redeclic to-[#b0011c] text-white h-24  flex  items-center">
            Casablanca Beer
          </h1>
          <div className="w-screen relative h-[calc(100vh_-_176px)] flex justify-center items-center">
            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-52 py-20">
          <h1 className="fontmed text-4xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            voluptate consectetur doloremque, dolor aut repellendus labore velit
            pariatur aliquam quo provident necessitatibus aliquid at ratione
            magnam laudantium sunt, omnis nesciunt. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Totam voluptate consectetur
            doloremque, dolor aut repellendus labore velit pariatur aliquam quo
            provident necessitatibus aliquid at ratione magnam laudantium sunt,
            omnis nesciunt.
          </p>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            voluptate consectetur doloremque, dolor aut repellendus labore velit
            pariatur aliquam quo provident necessitatibus aliquid at ratione
            magnam laudantium sunt, omnis nesciunt. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Totam voluptate consectetur
            doloremque, dolor aut repellendus labore velit pariatur aliquam quo
            provident necessitatibus aliquid
          </p>
          <div className="grid grid-cols-3 pt-10">
            <div className="flex gap-2 flex-col fontmed items-center justify-center border-r-[1px] border-gray-500">
              <p className="text-xl">Category</p>
              <p className="text-lg text-redeclic">Alcohol</p>
            </div>
            <div className="flex gap-2 flex-col fontmed items-center justify-center ">
              <p className="text-xl">Client</p>
              <p className="text-lg text-redeclic">SBM</p>
            </div>
            <div className="flex gap-2 flex-col fontmed items-center justify-center border-l-[1px] border-gray-500">
              <p className="text-xl">Brand</p>
              <p className="text-lg text-redeclic">Casablanca Beer</p>
            </div>
          </div>
        </div>
        <h1 className="fontmed text-7xl   bg-gradient-to-r from-redeclic to-[#b0011c] text-white h-24  px-20 flex  items-center">
          Digital Lab
        </h1>
        {/* <div className="flex px-20 py-20">
          <div className="grid grid-cols-3 gap-10">
            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover "
            />
            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover  "
            />

            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover  "
            />
          </div>
        </div> */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl my-20 mx-auto"
        >
          <CarouselContent>
            {items.map((it, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={it.image}
                    width={5020}
                    height={5020}
                    alt="image"
                    className="w-96"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h1 className="fontmed text-7xl  bg-gradient-to-r from-redeclic to-[#b0011c] text-white h-24  px-20 flex  items-center">
          Events
        </h1>
        <div className="px-20 flex flex-col gap-y-5 py-10">
          <h1 className="fontmed text-4xl text-redeclic">
            The Moroccan Spirit
          </h1>
          <div className="grid grid-cols-3 ">
            <div className="flex flex-col justify-center gap-y-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
            </div>

            <Iphone15Pro
              className="h-[550px] w-full"
              videoSrc="/TMS-baya.mp4"
            />
            <div className="flex flex-col justify-center gap-y-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
              <p>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;

const items = [
  { id: 1, content: "Item 1", image: "/gold.jpg" },
  { id: 2, content: "Item 2", image: "/casablancabeer.jpg" },
  { id: 3, content: "Item 3", image: "/stork.jpg" },
  { id: 4, content: "Item 4", image: "/gold.jpg" },
  { id: 5, content: "Item 5", image: "/gold.jpg" },
  { id: 6, content: "Item 6", image: "/gold.jpg" },
];
