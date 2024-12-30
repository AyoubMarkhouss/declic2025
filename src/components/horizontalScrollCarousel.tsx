import React, { useState, useRef } from "react";

import { motion, useTransform, useScroll } from "framer-motion";

import Link from "next/link";

const HorizontalScrollCarousel = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2.5%", "-61%"]);

  return (
    <div>
      <h1 className="fontmed text-7xl  bg-redeclic text-white h-24  px-20 flex  items-center">
        OUR PROJETCS
      </h1>
      <section ref={targetRef} className=" relative h-[450vh] z-10">
        <div className="sticky laptop:top-0 desktop:top-20">
          <div className="absolute top-0  -z-10 h-[calc(100vh_-_50vh)] w-full left-0" />
          {/* <h1 className="fontmed pl-20 text-7xl z-50 text-white laptop:-mb-14 desktop:-mb-28">
          NOS PROJETS
        </h1> */}
          <div className="flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-20 items-center ">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  hoveredCardId={hoveredCardId}
                  onHoverStart={() => setHoveredCardId(card.id)}
                  onHoverEnd={() => setHoveredCardId(null)}
                />
              ))}
              {/* <div
              className={cn(
                instrumentSerif.variable,
                "tablet:text-9xl block w-screen text-start tablet:mr-[42rem] laptop:mr-40 shrink-0 text-black unique italic laptop:ml-36 desktop:ml-[25rem] desktop:-mr-[40rem]"
              )}
            >
              <p className="tablet:hidden laptop:flex">
                Let’s build success together!
              </p>
              <p className="laptop:hidden tablet:flex">Let’s</p>
              <p className="laptop:hidden tablet:flex tablet:pl-[10%] laptop:pl-0">
                build
              </p>
              <p className="laptop:hidden tablet:flex tablet:pl-[20%] laptop:pl-0">
                success
              </p>
              <p className="laptop:hidden tablet:flex tablet:pl-[30%] laptop:pl-0">
                together!
              </p>
            </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mb-20">
        <Link
          href="/portfolio?section=work"
          className="fontmed shadow-lg px-4 py-4 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = { url: string; title: string; id: number; desc: string };

const Card = ({
  card,
  hoveredCardId,
  onHoverStart,
  onHoverEnd,
}: {
  card: CardType;
  hoveredCardId: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  // const isHovered = hoveredCardId === card.id;
  const isOtherHovered = hoveredCardId !== null && hoveredCardId !== card.id;

  return (
    <div
      className="group overflow-hidden object-contain relative flex flex-col gap-y-2 h-full bigmobile:w-96 tablet:w-[400px] z-10"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div className="h-[450px] relative  shadow-lg overflow-hidden">
        <motion.img
          src={card.url}
          width={500}
          height={500}
          alt="images"
          className={`object-cover h-[450px] w-full transition-all duration-300 transform ${
            isOtherHovered
              ? "brightness-50 scale-100"
              : "brightness-100 group-hover:scale-110"
          }`}
        />
      </div>

      <h1
        className={`fontmed  text-4xl transition-colors duration-300 ${
          isOtherHovered ? "text-gray-400" : "text-black"
        }`}
      >
        {card.title}
      </h1>
      <p
        className={`fontmed  transition-colors duration-300 -mt-2 ${
          isOtherHovered ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {card.desc}
      </p>
    </div>
  );
};

const cards: CardType[] = [
  {
    url: "https://framerusercontent.com/images/G9uxI6jiEckDae7icimChnY3M.png",
    title: "Flag Speciale Original",
    desc: "lorem impsum huba",
    id: 1,
  },
  {
    url: "https://framerusercontent.com/images/ADvUsiYVpBSeLw1SyI90rXNyJ4.png",
    title: "Flag Speciale Gold",
    desc: "lorem impsum huba",
    id: 2,
  },
  {
    url: "https://framerusercontent.com/images/Z0ejm2polTa8PyJBWWGlIsWAs.png",
    title: "Casablanca Beer",
    desc: "lorem impsum huba",
    id: 3,
  },
  {
    url: "https://framerusercontent.com/images/xrD1XEKUiPxzEfAp3NgFFX5Mbk.png",
    title: "Carlsberg Beer",
    desc: "lorem impsum huba",
    id: 5,
  },
  {
    url: "https://framerusercontent.com/images/JZtV3h8a9e0wxiST1yOipwTpUKA.png",
    title: "Stork",
    desc: "lorem impsum huba",
    id: 6,
  },
  {
    url: "https://framerusercontent.com/images/63Ou8G3dAZyA7jCePWCbGXWT0.png",
    title: "Vins D'ici",
    desc: "lorem impsum huba",
    id: 7,
  },
  {
    url: "https://framerusercontent.com/images/8Ffi88e202S78L0ljwETS0kBaC4.png",
    title: "Vins Castel",
    desc: "lorem impsum huba",
    id: 8,
  },
];
