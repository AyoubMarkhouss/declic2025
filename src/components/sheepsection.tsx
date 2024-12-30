import Image from "next/image";

export default function Sheepsection() {
  return (
    <div className="h-screen bg-white flex ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5  px-20">
        {/* Left Column: Heading */}
        <div className="col-span-1 pt-20">
          <h1 className="text-5xl absolute z-20 font-black leading-tight tracking-tight">
            WHEN THE WORLD <br/> <span className="">ZIGS,</span>{" "}
            <span className="text-red-500">ZAG.</span>
          </h1>
          
        </div>

        {/* Middle Column: Sheep GIF */}
        <div className="col-span-2 relative -z-0  ">
          <Image
            src="/Sheep.gif" // Replace with your GIF path in the public folder
            alt="Black Sheep"
            width={400}
            height={400}
            className="object-contain absolute bottom-0 w-full"
          />
        </div>

        {/* Right Column: Paragraphs */}
        <div className="col-span-1 text-gray-700 text-md flex flex-col justify-center">
          <p className="">
            It’s easy to go with the grain, stick within the category codes and
            make your brand as frictionless as possible. It feels safe. And in
            an uncertain world, safety feels like a sensible strategy.
          </p>
          <p className="">
            But we believe the greatest risk is to stand still and fail to stand
            out. It’s only the bold that get noticed and the brave that get
            loved today. From your purpose to your point of sale, it’s
            difference that will pay dividends. That is our belief, and this is
            our promise: We will never offer you business as usual. We will
            always build you a brand less ordinary – and far more powerful.
          </p>
          <p className="text-black font-bold ">Welcome to BBH.</p>
        </div>
      </div>
    </div>
  );
}
