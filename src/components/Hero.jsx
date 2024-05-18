import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-screen-lg mx-auto px-4 py-12 md:py-24 text-center">
        <p className="text-[#00df9a] font-bold text-lg md:text-xl mb-4">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Grow with data.</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <p className="text-xl md:text-4xl font-bold mb-2 md:mb-0">
            Fast, flexible financing for
          </p>
          <TypeAnimation
            className="text-xl md:text-4xl font-bold ml-2"
            sequence={["BTB", 2000, "BTC", 2000, "SASS", 2000]}
            wrapper="span"
            speed={0}
            repeat={Infinity}
          />
        </div>
        <p className="text-lg md:text-xl font-bold text-gray-500 mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-full md:w-[200px] rounded-md font-medium py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
