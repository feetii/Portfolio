import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-20 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="absolute top-28 w-[50vw] h-[80vh] left-80"
          fill="blue"
        />
      </div>
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center
          dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.5]"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="relative z-10 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="uppercase text-xs text-center text-blue-100 max-w-80 tracking-widest">
            My Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center mb-4 text-sm md:text-lg lg:text-2xl md:tracking-wider">
            Hello, I’m Fethi, a passionate developer.
          </p>
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
