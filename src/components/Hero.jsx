import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Contact } from "../constants";
import video from "../assets/video.mp4";

const Hero = () => {
  // useGSAP(() => {
  //   gsap.fromTo(
  //     "#getQuote",
  //     {
  //       y: 250,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "bounce.inOut",
  //       delay: 0.21,
  //     }
  //   );
  // }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-18">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide">
        Your Safety,
        <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          Our Priority
        </span>
      </h1>
      <p className=" mt-7 text-lg text-center text-neutral-500 max-w-4xl">
        <span className="text-xl text-neutral-200">
          <span className=" bg-gradient-to-r from-orange-300 to-red-600 bg-clip-text text-transparent">
            Empowering Businesses with{" "}
          </span>
          Expert Safety Solutions
        </span>
        <br />
        Protect your workforce and ensure compliance with our tailored safety
        consulting services. <br />
        From risk assessments to training programs, make secure and productive
        environment.
      </p>

      <div
        id="getQuote"
        className="cusror-pointer text-xl mt-8 hover:text-black bg-orange-500 py-3 px-5 rounded-xl hover:scale-105 transition duration-300 ease-in-out"
      >
        <a
          href={`https://wa.me/9981338473?text=${encodeURIComponent(
            "Hi, Welcome to ProsureTech! How can we help you?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          Book A Call
        </a>
      </div>
      <div className="mt-10 justify-center flex">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg  border-2  border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
